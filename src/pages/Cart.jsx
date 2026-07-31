import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

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
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-2.5 rounded-md">
                Checkout Now
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