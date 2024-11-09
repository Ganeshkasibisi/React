import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


//1. Header Component
const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const[btnname, setBtnName] = useState("Login");
    
    const cartItems = useSelector((store) => store.cart.items);

    return <div className="flex flex-wrap mx-auto items-center justify-between p-6 lg:px-8 text-slate-300 bg-orange-300">
        <div>
            <img className="w-16 mx-6 mt-2o" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex flex-wrap m-4 p-4 space  ">
                <li className="px-4 text-white">
                    onlineStatus : {onlineStatus?"🟢":"🔴"}
                </li>
                <li className="px-4 text-white">
                    <Link to ="/">Home</Link>
                    </li>
                <li className="px-4 text-white">
                    <Link to ="/about">About</Link> 
                    
                    </li>
                <li className="px-4 text-white">
                <Link to="/contact">
                 Contact 
                </Link>
                </li>
                <li className="px-4 text-white font-bold">
            <Link to="/cart"> 
              Cart (
              {cartItems.length === 1
                ? `${cartItems.length} item`
                : `${cartItems.length} items`}
              )
            </Link>
          </li>
                <button className=" text-white login"
                onClick={() => {
                    btnname==="Login"?setBtnName("Logout"):setBtnName('Login')
                }}
                >
                   {btnname}
                </button>
                <li className="px-4 font-bold text-white">
            <Link className="links">{loggedInUser}</Link>
          </li>
            </ul>
        </div>
    </div>
}//Header

export default Header;
