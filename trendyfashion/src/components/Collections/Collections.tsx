import LadyShirt from "../../assets/LadyShirt.jpg";
import StoneJeans from "../../assets/stone_jeans.jpg";
import Bag1 from "../../assets/bag1.jpg";
import BackPack from "../../assets/backpack.jpg";


const Collections = () => {
  return (
    <div className="bg-gray-100 py-6 rounded-xl">
      <div><h2 className="text-center p-4">COLLECTIONS</h2></div>
        <div className="mx-auto grid max-w-6xl  grid-cols-1  py-0 sm:py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img src={LadyShirt} className="rounded-2xl p-8  w-full object-contain" alt="" />
            <img src={Bag1} className="rounded-2xl p-8 w-full object-contain"  alt="" />
            <img src={StoneJeans} className="rounded-2xl p-8 w-full object-contain"  alt="" />
            <img src={BackPack} className="rounded-2xl p-8  w-full object-contain" alt="" />
        </div>
    </div>
  )
}

export default Collections
