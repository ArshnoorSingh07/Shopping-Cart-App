import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/cartSlice";
import { formatPrice } from "../utils/currency";

const Product = ({post}) => {

  const {cart} = useSelector( (state) => state); 
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart")
  }


  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }


  return(
    <div className="flex min-w-0 flex-col items-center justify-between
    transition-shadow duration-300 hover:shadow-lg rounded-xl
    gap-3 p-4 border">
      <div className="w-full min-w-0">
        <p className="text-gray-700 font-semibold text-base text-left break-words mt-1">{post.title}</p>
      </div>
      
      <div className="w-full">
        <p className="text-gray-500 font-normal text-xs text-left break-words">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className="h-44 sm:h-48 w-full p-2">
        <img src={post.image} alt={post.title} className="h-full w-full object-contain"/>
      </div>

      <div className="flex w-full flex-wrap items-center justify-between gap-3 mt-3">
        <div>
          <p className="text-green-600 font-semibold items-center w-full mt-1">{formatPrice(post.price)}</p>
        </div>

        {
          cart.some((p) => p.id === post.id)
            ? (
                <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
                min-h-[44px] px-3 py-2 uppercase
                hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
                onClick={removeFromCart}
                >
                  Remove Item
                </button>
              )
            : (
                <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px]
                min-h-[44px] px-3 py-2 uppercase
                hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
                onClick={addToCart}
                >
                  Add to Cart
                </button>
              )
        }
      </div>

    </div>
  );
};

export default Product;
