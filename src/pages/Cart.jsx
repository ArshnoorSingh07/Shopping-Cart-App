import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { clearCart } from "../redux/Slices/cartSlice";
import { initiateRazorpayPayment } from "../utils/razorpay";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setIsProcessing(true);

    initiateRazorpayPayment({
      amount: totalAmount,
      cartItems: cart,
      onSuccess: (response) => {
        setIsProcessing(false);
        dispatch(clearCart());
        toast.success("Payment successful!");
        navigate("/order-success", {
          state: { paymentId: response.paymentId },
        });
      },
      onFailure: (error) => {
        setIsProcessing(false);
        toast.error(error.message || "Payment failed. Please try again.");
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-2 min-h-[80vh]">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6 py-6">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              >
                <CartItem item={item} itemIndex={index} />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Your Cart
              </h2>
              <p className="text-sm text-gray-500 mb-4">Summary</p>

              <div className="flex justify-between text-sm text-gray-600 py-2 border-t border-gray-100">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between text-base font-semibold text-gray-800 py-3 border-t border-gray-100">
                <span>Total Amount</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className={`w-full mt-4 font-medium py-2.5 rounded-md transition-colors text-white
                  ${isProcessing
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Checkout Now"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh] gap-4">
          <h1 className="text-xl font-semibold text-gray-700">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-6 py-2.5 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;