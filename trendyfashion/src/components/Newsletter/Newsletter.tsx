import { RiMailAiLine } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div className="bg-amber-600 flex items-center justify-around py-14">
      <div className="flex items-center gap-4 font-medium">
        <RiMailAiLine />
        <p>Sign up to Newsletter</p>
      </div>
      <div className="font-medium">
        <p>...and recieve 5000N coupon for first shopping</p>
      </div>
      <div>
        <input type="email" placeholder="Enter your email" className="bg-white p-3 w-86" />
        <button className="bg-black text-white p-3">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
