import "./Hero.css";
import hero from "../../assets/hero3.jpg"
const Hero = () => {
  return (
    <div className="box-border">
    
      <img src={hero} alt=""  className="heroImg"/>
    </div>
  )
}

export default Hero

