import DealsCard from "../DealsCard/DealsCard"


const Deals = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-14">
        <div className="">
            <img className="h-88 w-78" src="/Wallpaper.jpg" alt="" />

        </div>
        <div className="">
            <h2>Top Deals</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        </div>
        <div className="">
            <h2>Top Selling</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        </div>
        <div className="">
            <h2>Hot Products</h2>
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        <DealsCard text="Dior Beach Bag " price={235} discount={248} image="/DiorBeachBag.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Deals
