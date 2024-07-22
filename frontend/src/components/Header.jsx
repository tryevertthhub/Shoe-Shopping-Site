import { useState } from "react";
import ResetPassword from "./ResetPassword"
import image from "../assets/logo.png"
import { Link } from "react-router-dom";
const Header = ({gotoFirst}) => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

    return (   <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700  text-black shadow-lg z-30">
    <div className="ml-2 mr-2 md:ml-20 md:mr-10 flex items-center  justify-between h-24 ">
      <div  className="flex items-center cursor-pointer">
        <Link to="/">  <img className="h-16 hidden lg:block" src={image} alt="" onClick={gotoFirst}/></Link>
      
        <Link to="/"> <span className="ml-4 uppercase font-black text-3xl">SNKR DEALER </span></Link>
      </div>

     
      <ResetPassword/>
    </div>
  </header> );
}
 
export default Header;