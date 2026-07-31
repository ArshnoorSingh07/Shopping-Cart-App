import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderSuccess = () => {
  const location = useLocation();
  const paymentId = location.state?.paymentId || null;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Slight delay for entrance animation
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 max-w-lg w-full text-center
          transition-all duration-700 ease-out
          ${showContent ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
      >
        {/* Animated Checkmark */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className={`w-10 h-10 text-green-600 transition-all duration-500 delay-300
              ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              className="checkmark-path"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: showContent ? 0 : 24,
                transition: "stroke-dashoffset 0.6s ease-out 0.5s",
              }}
            />
          </svg>
        </div>

        <h1
          className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2
            transition-all duration-500 delay-500
            ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Payment Successful!
        </h1>

        <p
          className={`text-gray-500 mb-6
            transition-all duration-500 delay-700
            ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {paymentId && (
          <div
            className={`bg-gray-50 rounded-lg p-4 mb-6 transition-all duration-500 delay-[800ms]
              ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
              Payment ID
            </p>
            <p className="text-sm font-mono text-gray-700 break-all">
              {paymentId}
            </p>
          </div>
        )}

        <Link to="/">
          <button
            className={`bg-blue-600 hover:bg-blue-700 transition-all duration-500 delay-[900ms]
              text-white font-medium px-8 py-3 rounded-lg hover:shadow-lg
              active:scale-95
              ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
