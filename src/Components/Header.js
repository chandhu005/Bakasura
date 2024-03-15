import { LOGO_URL } from "../utils/constant";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
const Header=()=>{
  const linkStyle = {
    textDecoration: 'none',
    // Add other styles as needed
  };
  //subscribing to store using selector
const cartItems=useSelector((store)=>
store.cart.items
);
  //let btnname="Login"
  const[BtnnameReact,SetBtnnameReact]=useState("Login");
  const onlinestatus=useOnlineStatus();
  const data=useContext(UserContext);
  console.log(data);
    return(
      <>
      <div className="flex  justify-between bg-purple-50  shadow-lg mb-2 px-4">
        <div className="logo-container">
          <Link to="/"> <img className="w-20 rounded-full shadow-lg hover:w-28" src={LOGO_URL} alt="Applogo"/></Link>
          
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 hover:text-xl hover:text-violet-500">Online status:{onlinestatus ?"🟢":"🔴"} </li>
            <li className="px-4 hover:text-xl hover:text-violet-500"><Link to="/" style={linkStyle}>Home</Link></li>
            <li className="px-4 hover:text-xl hover:text-violet-500 "><Link to="/about" style={linkStyle}>About us</Link></li>
            <li className="px-4 hover:text-xl hover:text-violet-500"><Link to="/Contact" style={linkStyle}>Contact us</Link></li>
         <li className="px-4 hover:text-xl hover:text-violet-500">
              {/* Cart icon and count */}
              <Link to="/cart" style={linkStyle}>
                <FaShoppingCart className="inline-block mr-1" />
                 {cartItems.length}
              </Link>
            </li>
            <button className="login-login-btn bg-indigo-500 hover:bg-indigo-700 text-white px-4 rounded" onClick={()=>{
              BtnnameReact==="Login"?
              SetBtnnameReact("Logout"):SetBtnnameReact("Login")
            }}>{BtnnameReact}</button>
            <li className="px-4 hover:text-xl hover:text-violet-500">{data.loggedInUser}</li>
          </ul>
  
        </div>
      </div>
      </>
    )
  };
  export default Header