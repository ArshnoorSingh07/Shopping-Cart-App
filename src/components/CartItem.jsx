import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,index}) => {
  const dispatch=useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }


  return(
    <div className="flex flex-col border border-b-black">
 
      <div className="flex border gap-3 p-4 mt-5 ml-5">

        <div className="h-[200px] w-[200px] border flex justify-center">
          <img src={item.image} alt="" className="h-full w-[140px]"/>
        </div>

        <div className="flex flex-col w-[350px] ml-5">
          <h1 className="text-gray-700 font-semibold text-md mt-1 mb-3">{item.title}</h1>
          <h1 className="text-gray-400 font-normal text-[10px]">{item.description}</h1>

          <div className="flex justify-between gap-12 mt-5">
            <p className="text-green-600 font-semibold items-center w-full mt-1">${item.price}</p>
            <button
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </button>
          </div>
        </div>
          
      </div>


    </div>
  );
};

export default CartItem;
