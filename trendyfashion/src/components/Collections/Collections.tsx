import LadyShirt from "../../assets/LadyShirt.jpg";
import shirt3 from "../../assets/shirt3.jpg";
import Bag1 from "../../assets/bag1.jpg";
import BackPack from "../../assets/backpack.jpg";


const Collections = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div><h2 className="text-center my-10 p-4">COLLECTIONS</h2></div>
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img src={LadyShirt} className="rounded-2xl h-70 w-80" alt="" />
            <img src={Bag1} className="rounded-2xl h-70 w-80"  alt="" />
            <img src={shirt3} className="rounded-2xl h-70 w-80"  alt="" />
            <img src={BackPack} className="rounded-2xl h-70 w-80" alt="" />
        </div>
    </div>
  )
}

export default Collections
