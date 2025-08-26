import "./ForYou.css";
import Model from "../../assets/fashion-model-in-fur.jpg";
import FashionModel from "../../assets/fashion-model-in-black-white.jpg";
import YoungWoman from "../../assets/young-woman-in-comfortable-combo.jpg";

const ForYou = () => {
  return (
    <div>
       {/* component  */}
<div className="flex flex-col bg-white m-auto p-auto">
        
      <div
        className="flex overflow-x-scroll pt-18 pb-18 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={YoungWoman} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={FashionModel} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={Model} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={YoungWoman} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={Model} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={FashionModel} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={YoungWoman} alt="" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <img src={FashionModel} alt="" />
            </div>
          </div>
        </div>
      </div>
</div>

    </div>
  )
}

export default ForYou
