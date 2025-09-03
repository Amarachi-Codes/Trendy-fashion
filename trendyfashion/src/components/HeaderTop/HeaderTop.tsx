import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

  

const HeaderTop = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="text-xs border-b-2 hidden lg:block  ">
      <div className="bg-amber-600 py-2 flex justify-around items-center" >
        <div className="flex items-center gap-2">
            <p>(+234)8044522379</p>
            <p>Our Location</p>
        </div>
        <div className="text-xs">
            <p>Trendy 25silver jewelry, save up 35% off today Shop now</p>
               {/* <p> Get great devices up to 50% off View details</p>
               <p> Supper Value Deals - Save more with coupons</p> */}
        </div>
        <div className="flex gap-2 z-10 items-center text-xs">
           {/* Dropdown menu */}
           <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white/10 px-3 py-1 text-xs  text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20"
      >
        Options
        <RiArrowDropDownLine className="-mr-1 size-5 text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg outline-1 -outline-offset-1 outline-white/10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
            >
              License
            </a>
            <button
              type="button"
              className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>

           <p>Log In/Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
