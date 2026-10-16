import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { formatPrice } from "../utils/currency";

const CartItem = ({item}) => {
  const dispatch=useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }


  return(
    <div className="min-w-0">
 
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

        <div className="h-40 w-full sm:h-36 sm:w-28 md:w-36 shrink-0 flex justify-center">
          <img src={item.image} alt={item.title} className="h-full w-full object-contain"/>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-gray-700 font-semibold text-base break-words mb-3">{item.title}</h2>
          <p className="text-gray-500 font-normal text-xs leading-relaxed break-words">{item.description}</p>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <p className="text-green-600 font-semibold">{formatPrice(item.price)}</p>
            <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md hover:bg-red-50"
            aria-label={`Remove ${item.title} from cart`}
            onClick={removeFromCart}>
              <FcDeleteDatabase className="text-2xl" />
            </button>
          </div>
        </div>
          
      </div>


    </div>
  );
};

export default CartItem;
