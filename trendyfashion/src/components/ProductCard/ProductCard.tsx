import { NavLink } from "react-router-dom";
import Rangeslider from "../RangeSlider/Rangeslider";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";



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
            <p>Category</p>
            <ul>
              <NavLink to={""}>Womens Clothing</NavLink>
              <NavLink to={""}>Mens Clothing</NavLink>
              <NavLink to={""}>Jewelry & Accessories</NavLink>
              <NavLink to={""}>Bags & Shoes</NavLink>
              <NavLink to={""}>Mother & Kids</NavLink>
            </ul>
          </div>
          <div>
            <p>Fill by price</p>
            <ul>
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
              label="Red (56)"
              checked={isChecked1}
              onChange={setIsChecked4}
              
              />
              <Checkbox 
              label="Blue (78)"
              checked={isChecked2}
              onChange={setIsChecked5}
              
              />

              <Checkbox 
              label="Green (54)"
              checked={isChecked3}
              onChange={setIsChecked6}/>
              <button className="bg-amber-500">Filter</button>
            </ul>
          </div>
          <div>
            <p>New Product</p>
            <ul>
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
