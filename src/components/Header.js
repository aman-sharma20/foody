import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore.js";


const Header = () => {
    const [btnName,setbtnName] =useState("Login");
    const onlineStatus=useOnlineStatus();
    // const data=useContext(UserContext);
    const {loggedInUser}=useContext(UserContext);
    // console.log("loggeduser",loggedInUser)
    // console.log("data",data)
    //s
    //subscribing to store ===reading data from store using selector
    const cartItems= useSelector((store)=>{
        // console.log(appStore,"appstore");
        // console.log(store.cart.items)
        return store.cart.items})
       
    
    return (<div className=" flex justify-between bg-red-100 shadow-lg  ">
         
        <div className="h-30 w-20">
          <img className="h-20 w-20 object-cover mx-4 rounded-full  " src={LOGO_URL}></img>
          <h2 className="mx-4 text-lg font-medium w-20 text-center">Foodlify</h2> 
        </div>
        <div className="  mt-4 mr-14 text-xl text-slate-950 font-medium">
            <ul className="flex flex-wrap">
                {/* <li className="p-5 ">
                <Link to="/grocery">Grocery</Link>
                </li> */}
                {/* <li  className="p-5 ">{onlineStatus===true?"🟢":"🔴"}</li> */}
                <li  className="p-5 hover:border-b-4 border-[#f05a35]">
                <Link className=" " to="/">Home</Link></li>
                <li  className="p-5 hover:border-b-4 border-[#f05a35]  ">
                <Link to="/about">About</Link>
                </li>
                <li  className="font-bold text-xl p-5 hover:border-b-4 border-[#f05a35]">
                <Link to="/cart">Cart({" "+cartItems.length+"items "})</Link></li>
                <li  className="p-5 hover:border-b-4 border-[#f05a35] ">
                <Link to="/contact">Contact Me</Link></li>
                 {loggedInUser&&<li className="p-5 border-2 border-black bg-red-300 rounded-full min-w-32" >{loggedInUser}</li>}
                {/* <li className="p-5 border-2 border-black bg-red-300 rounded-full min-w-30" >{loggedInUser}</li> */}
                <button className="font-semibold text-2xl p-3 mt-2 mb-1 w-28 ml-[15]  pointer-events-auto border-solid border-slate-800 border-2 rounded-md bg-[#f05a35]" onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                    
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
}
export default Header;