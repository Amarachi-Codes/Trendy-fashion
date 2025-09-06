import { NavLink } from "react-router-dom";

const ProductCard = () => {
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
              <p>Range</p>
              <p>Color</p>
              <p>Item Condition</p>
              <button></button>
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
