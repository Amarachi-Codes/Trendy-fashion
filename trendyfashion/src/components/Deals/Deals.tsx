import DealsCard from "../DealsCard/DealsCard"


const Deals = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between py-14 ">
        <div className="">
            <img className=" h-full sm:h-88 w-full p-8 object-contain" src="/Wallpaper.jpg" alt="" />

        </div>
        <div className=" ">
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
