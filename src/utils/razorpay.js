/**
 * Initiates Razorpay payment checkout.
 *
 * @param {Object} options
 * @param {number} options.amount      - Total amount in INR (will be converted to paise)
 * @param {Array}  options.cartItems   - Cart items array (used for description)
 * @param {Function} options.onSuccess - Callback on successful payment (receives razorpay response)
 * @param {Function} options.onFailure - Callback on payment failure/dismiss (receives error)
 */
export const initiateRazorpayPayment = ({ amount, cartItems, onSuccess, onFailure }) => {
  const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

  if (!keyId || keyId === "rzp_test_XXXXXXXXXXXXXX") {
    onFailure(new Error("Razorpay Key ID is not configured. Please set REACT_APP_RAZORPAY_KEY_ID in your .env file."));
    return;
  }

  if (!window.Razorpay) {
    onFailure(new Error("Razorpay SDK failed to load. Please check your internet connection."));
    return;
  }

  const amountInPaise = Math.round(amount * 100);
  const itemCount = cartItems.length;
  const description = itemCount === 1
    ? `1 item in your cart`
    : `${itemCount} items in your cart`;

  const options = {
    key: keyId,
    amount: amountInPaise,
    currency: "INR",
    name: "Shopping Cart",
    description: description,
    image: "/logo.png",
    handler: function (response) {
      // Called on successful payment
      onSuccess({
        paymentId: response.razorpay_payment_id,
        orderId: response.razorpay_order_id,
        signature: response.razorpay_signature,
      });
    },
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    theme: {
      color: "#2563EB", // matches the app's blue-600
    },
    modal: {
      ondismiss: function () {
        onFailure(new Error("Payment was cancelled."));
      },
    },
  };

  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.on("payment.failed", function (response) {
    onFailure(new Error(response.error.description || "Payment failed. Please try again."));
  });
  razorpayInstance.open();
};
