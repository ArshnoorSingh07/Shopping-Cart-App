import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="bg-blue-950">
      <div className="flex flex-row justify-between">
          <NavLink to="/">
          <div>
          <img src={"https://itsshahbazhere.github.io/shopEcomzy/assets/logo-CQ73aCIE.png"} 
            alt="" width={150} height={60}/>
          </div>
          </NavLink>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
