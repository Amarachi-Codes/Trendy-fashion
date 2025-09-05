import BannerDown from "../../assets/bannerDown.png"

const TodaysDeals = () => {
  return (
    <div className="my-14 relative h-40 w-full">
      <img src={BannerDown} className="h-full w-full object-cover rounded-lg" alt="" />
    <div className="absolute top-1/2 left-6 -translate-y-1/2 ">
    <p className="text-xs sm:text-lg font-medium text-gray-400">Shop Today’s Deals</p>
    <h1 className="text-sm sm:text-2xl font-normal text-white bg-amber-600">Happy Mother's Day. Big Sale Up to 40%</h1>
    </div>
    </div>
  )
}

export default TodaysDeals
