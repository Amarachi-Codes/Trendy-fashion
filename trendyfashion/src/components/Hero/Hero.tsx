import "./Hero.css";
import heromain from "../../assets/heroMain.png"


const Hero = () => {
  return (
    <div className="box-border flex items-center justify-around gap-8 px-48">
    <div>
      <h6>Hot Promotions</h6>
      <h3>Fashion Trends</h3>
      <h1>Great Collections</h1>
      <p>Save more with coupons and up to 20% off</p>
      <div className="flex items-center">
        
       <img className="" src="public/btnBg.png" alt=""/>
       <p>Discover Now</p>
       
      </div>
    </div >
    <div className="bg-amber-600 py-14 rounded-full flex items-center justify-around ">
      <div className="px-4">
      <h1>Big Offer 50% Off</h1>
      </div>
      <img src={heromain} alt=""  className="h-100 w-100"/>
      </div>
    </div>
  )
}

export default Hero

