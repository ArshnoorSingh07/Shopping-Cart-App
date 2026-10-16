import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const {cart} = useSelector((state) => state);

  return(
    <div>
      <nav className="flex justify-between gap-3 items-center h-16 sm:h-20 max-w-6xl mx-auto px-4 sm:px-6">
          <NavLink to="/" className="min-w-0" aria-label="Shopping Cart home">
          <div>
          <img src="/logo.png" className="h-auto max-h-10 sm:max-h-14 max-w-[140px] sm:max-w-[200px] object-contain" alt="Shopping Cart"/>
          </div>
          </NavLink>

          <div className="flex shrink-0 items-center font-medium text-slate-100 gap-2 sm:gap-4">
            <NavLink to="/" className="flex min-h-[44px] items-center px-2">
              <p>Home</p>
            </NavLink>
            
            <NavLink to="/cart" className="flex min-h-[44px] min-w-[44px] items-center justify-center" aria-label={`Cart, ${cart.length} items`}>
              <div className="relative">
                <FaShoppingCart className="text-2xl"/>
                {
                  cart.length>0 &&
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  rounded-full justify-center items-center animate-bounce text-white">
                    {cart.length}
                  </span>
                }
              </div>
            </NavLink>
          </div>
          
      </nav>
    </div>
  );
};

export default Navbar;
