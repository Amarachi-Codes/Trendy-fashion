import "./Hero.css";
import herolady from "../../assets/herolady.png"


const Hero = () => {
  return (
    <div className="box-border flex items-center justify-around gap-8 px-48 py-8">
    <div>
      <h6>Hot Promotions</h6>
      <h3>Fashion Trends</h3>
      <h1>Great Collections</h1>
      <p>Save more with coupons and up to 20% off</p>
      <div className="relative w-full max-w-md">
        
       <img className="" src="/btnBg.png" alt=""/>
       <p className="absolute inset-0 right-28 flex items-center justify-center">Discover Now</p>
       
      </div>
    </div >
    <div className="relative bg-brand py-14 rounded-full flex items-center justify-around ">
      <div className="px-4 absolute inset-0 flex items-center justify-center right-84">
      <h1>Big Offer 50% Off</h1>
      </div>
      <img src={herolady} alt=""  className="h-100 w-128"/>
      </div>
    </div>
    
  )
}

export default Hero

