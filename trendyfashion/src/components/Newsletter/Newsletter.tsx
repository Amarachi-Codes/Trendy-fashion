import { RiMailAiLine } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div className="bg-amber-600 flex flex-col sm:flex-row items-start sm:items-center justify-around py-14 px-8 sm:px-0 gap-1 sm:gap-0">
      <div className="flex items-center gap-4 font-medium text-sm sm:text-base">
        <RiMailAiLine />
        <p>Sign up to Newsletter</p>
      </div>
      <div className="font-medium text-sm sm:text-base">
        <p>...and recieve 5000N coupon for first shopping</p>
      </div>
      <div className="text-xs sm:text-sm py-3 sm:py-0">
        <input type="email" placeholder="Enter your email" className="bg-white p-2 sm:p-3 w-78 sm:w-86" />
        <button className="bg-black text-white p-2 sm:p-3">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
