import Prada from "./../../assets/Prada.png";
import Boss from "../../assets/Boss.png";
import Burberry from "../../assets/Burberry.png";
import Catier from "../../assets/Catier.png";
import Gucci from "../../assets/Gucci.png";
import Tiffany from "../../assets/Tiffany & Co.png";


const Brands = () => {
  return (
    <div>
      <div className="flex items-center justify-around p-4 m-10">
        <div><img src={Prada} alt="" /></div>
        <div><img src={Burberry} alt="" /></div>
        <div><img src={Boss} alt="" /></div>
      </div>
      <div className="flex items-center justify-around p-4 m-10">
        <div><img src={Catier} alt="" /></div>
        <div><img src={Gucci} alt="" /></div>
        <div><img src={Tiffany} alt="" /></div>
      </div>
    </div>
  )
}

export default Brands
