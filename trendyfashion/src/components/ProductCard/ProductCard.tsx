import { NavLink } from "react-router-dom";
import Rangeslider from "../RangeSlider/Rangeslider";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";
import { GrFilter } from "react-icons/gr";



const ProductCard = () => {
  const handleSliderChange = (val: number) => {
    console.log("Slider value:", val);

    
  };
  const [isChecked1, setIsChecked1] = useState(false);
   const [isChecked2, setIsChecked2] = useState(false);
   const [isChecked3, setIsChecked3] = useState(false);
   const [isChecked4, setIsChecked4] = useState(false);
   const [isChecked5, setIsChecked5] = useState(false);
   const [isChecked6, setIsChecked6] = useState(false);

  return (
    <div>
      <div>
        <div>
          <div>
            <p className="py-4 font-bold">Category</p>
            <ul className="flex flex-col gap-4">
              <NavLink to={""}>Womens Clothing</NavLink>
              <NavLink to={""}>Mens Clothing</NavLink>
              <NavLink to={""}>Jewelry & Accessories</NavLink>
              <NavLink to={""}>Bags & Shoes</NavLink>
              <NavLink to={""}>Mother & Kids</NavLink>
            </ul>
          </div>
          <div>
            <p className="py-4 font-bold">Fill by price</p>
            <ul className="flex flex-col gap-4">
              <Rangeslider
        min={0}
        max={400}
        step={10}
        defaultValue={200}
        onChange={handleSliderChange}
      />
              
              <p>Color</p>
              
              <Checkbox 
              label="Red (56)"
              checked={isChecked1}
              onChange={setIsChecked1}
              
              />
              <Checkbox 
              label="Blue (78)"
              checked={isChecked2}
              onChange={setIsChecked2}
              
              />
              <Checkbox 
              label="Green (54)"
              checked={isChecked3}
              onChange={setIsChecked3}
              
              />
              
              
              <p>Item Condition</p>
              <Checkbox 
              label="New (1506)"
              checked={isChecked4}
              onChange={setIsChecked4}
              
              />
              <Checkbox 
              label="Refurbished (27)"
              checked={isChecked5}
              onChange={setIsChecked5}
              
              />

              <Checkbox 
              label="Fairly Used (46)"
              checked={isChecked6}
              onChange={setIsChecked6}/>
              <button className="bg-amber-500 w-35 px-6 py-1 rounded flex flex-row items-center gap-2"><GrFilter/> Filter</button>
            </ul>
          </div>
          <div className="">
            <p className="py-4 font-bold">New Product</p>
            <ul className="flex flex-col gap-4">
              <p>Range</p>
              <p>Color</p>
              <p>Item Condition</p>
              <button></button>
            </ul>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
