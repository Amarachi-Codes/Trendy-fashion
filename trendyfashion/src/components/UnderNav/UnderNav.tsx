import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FiHeadphones } from "react-icons/fi";

const UnderNav = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="hidden sm:flex sm:sticky top-0 items-center justify-around py-4 gap-24 bg-white z-50 ">
      {/* Dropdown menu */}
                 <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex w-full justify-center items-center  gap-x-1.5 rounded-md bg-amber-600 px-12 py-2 text-xs  text-white inset-ring-1 inset-ring-white/5 hover:bg-amber-600"
            >
              Browse Category
              <RiArrowDropDownLine className="-mr-1 size-5 text-gray-400" />
            </button>
      
            {open && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg outline-1 -outline-offset-1 outline-white/10">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Womens Clothing
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Mens Clothing
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                   Jewelry and Accessories
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                   Bags and Shoes
                  </a>
                  <button
                    type="button"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Mother and Kids
                  </button>
                </div>
              </div>
            )}
            </div>
            <div>
                    <ul className="flex items-center gap-4">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={""}>About</NavLink>
                        <NavLink to={"/signin"}>Shop</NavLink>
                        <NavLink to={"/signup"}>Blog</NavLink>
                        <NavLink to={""}>Contact</NavLink> 
                    </ul>

                </div>
                <div className="flex items-center gap-2">
                    <FiHeadphones/><p>Hotline</p>
                    <p>+2349077665550</p>
                </div>

    </div>
  )
}

export default UnderNav

