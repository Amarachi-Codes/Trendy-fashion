import Model from "../../assets/fashion-model-in-fur.jpg";
import FashionModel from "../../assets/fashion-model-in-black-white.jpg";
import YoungWoman from "../../assets/young-woman-in-comfortable-combo.jpg";


const Collections = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div><h2 className="text-center m-10 p-4">COLLECTIONS</h2></div>
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img src={Model} className="rounded-2xl" alt="" />
            <img src={FashionModel} className="rounded-2xl "  alt="" />
            <img src={YoungWoman} className="rounded-2xl"  alt="" />
            <img src={Model} className="rounded-2xl" alt="" />
        </div>
    </div>
  )
}

export default Collections
