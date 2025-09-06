import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface IProduct{
    category1: string;
    category2:string;
    category3:string;
}

const ProductNav = ({category1,category2,category3}:IProduct) => {
  return (
    <div>
      <div>
        <ul className="flex items-center justify-start gap-4 text-sm sm:text-base px-6 py-4 sm:px-24 text-gray-500 bg-gray-200 ">
                       <div className="flex gap-2 items-center text-amber-600"> <NavLink to={"/"}>{category1}</NavLink> <MdOutlineKeyboardArrowRight /></div>
                       <div className="flex gap-2 items-center" ><NavLink to={""}>{category2}</NavLink> <MdOutlineKeyboardArrowRight /></div>
                        <NavLink to={"/signin"}>{category3}</NavLink>
                        
                    </ul>

      </div>
    </div>
  )
}

export default ProductNav
