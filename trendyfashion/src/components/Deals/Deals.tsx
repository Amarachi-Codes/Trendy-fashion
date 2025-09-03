import DealsCard from "../DealsCard/DealsCard"


const Deals = () => {
  return (
    <div>
      <div className="flex items-center justify-around py-14 px-18">
        <div>

        </div>
        <div className="">
            <h2>Top Deals</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        </div>
        <div className="">
            <h2>Top Selling</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        </div>
        <div className="">
            <h2>Hot Products</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="public/DiorBeachBag.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Deals
