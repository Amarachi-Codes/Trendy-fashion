import "./Hero.css";
import herolady from "../../assets/herolady.png"


const Hero = () => {
  return (
    <div className="box-border flex flex-col-reverse lg:flex-row  items-center justify-around gap-8 py-8 bg-brand  rounded-lg mt-0 mb-10 sm:my-10  h-180 sm:h-120">
    <div className="text-center lg:text-left space-y-4">
      <h6 className="text-sm sm:text-base font-medium">Hot Promotions</h6>
      <h3 className="text-xl sm:text-2xl font-semibold">Fashion Trends</h3>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Great Collections</h1>
      <p className="text-sm sm:text-base lg:text-lg">Save more with coupons and up to 20% off</p>
      <div className="relative w-full max-w-xs sm:max-w-md mx-auto lg:mx-0">
        
       <img className="w-full" src="/btnBg.png" alt="" />
       <p className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-semibold">Discover Now</p>
       
      </div>
    </div >
    <div className="relative  flex items-center justify-center ">
      <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-lg sm:text-xl lg:text-3xl font bold text-center">Big Offer 50% Off</h1>
      </div>
      <img src={herolady} alt=""  className="h-auto w-60 sm:w-80 lg:w-96"/>
      </div>
    </div>
    
  )
}

export default Hero

