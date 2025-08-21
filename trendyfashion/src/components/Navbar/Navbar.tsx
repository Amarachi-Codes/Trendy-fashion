
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
     <nav className="nav">
                <NavLink to={""} className="logoWrapper">
                    <div className="logo">
                    <GiTakeMyMoney fill="#2C14DD"/> Trendy Fashion
                    </div>
                </NavLink>
                <div className="navCenter">
                <div className="inputWrapper">
                    < IoSearchSharp/>
                    <input type="text" placeholder="Search" />
                    
                </div>
                <button>Search</button>
                </div>
                <div className="navRight">
                    <ul>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={""}>About Us</NavLink>
                        <NavLink to={"/signin"}>Login</NavLink>
                        <NavLink to={"/signup"}>Signup</NavLink>
                        <NavLink to={""}>Profile</NavLink>
                    </ul>

                </div>
                {showMenu?<IoCloseSharp className="displaynav" fill="#000" onClick={()=>{setShowMenu(!showMenu)}}/> : <GiHamburgerMenu className="displaynav" fill="#000" onClick={()=>{setShowMenu(!showMenu)}}/>  }
                {showMenu &&(
                 <div className="hamburger">
                 <ul>
                 <li><NavLink to={"/"}>Home</NavLink></li>
                     <li><NavLink to={""}>About Us</NavLink></li>
                     <li><NavLink to={""}>Login</NavLink></li>
                    <li><NavLink to={""}>Signup</NavLink></li>
                     <li><NavLink to={""}>Profile</NavLink></li>
                 </ul>
             </div>   
                )}
                
            </nav> 
    </>
  )
}

export default Navbar
