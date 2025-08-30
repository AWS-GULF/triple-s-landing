import mockup from "../assets/images/mockup.svg"
import Carousel from "./Carousel"

export default function Landing() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="text-center pt-10 pb-4">
        <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[#E0E0E0] mb-6">
          Smarter Ticket Management for Growing Businesses
        </h1>
        <p className="lg:text-2xl text-[16px] text-[#fff] font-bold mb-8  mx-auto">
          An upcoming dashboard that streamlines support, improves response times, and scales with your business.
        </p>
        
        {/* Email Signup */}
  <div className="flex justify-center  mb-8">
  <div className="relative w-[600px]">
    <input 
      type="email" 
      placeholder="Enter Your Email" 
      className="w-full px-6 py-3 pr-32 rounded-full bg-white text-xs text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
      className="absolute top-1/2 right-1 -translate-y-1/2 px-6 py-1 sm:py-1 lg:py-1.5 bg-[#203B72] text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      Get Notified
    </button>
  </div>
</div>

        {/* Product Mockups - Using imported images */}
        <div className="relative flex justify-center items-center ">
          <img src={mockup} alt="Product Mockup" className="" />
        </div>
      </div>

      {/* New Release Section */}
      <div className="text-center py-10 lg:pb-20">
        <div className="text-[#E0E0E0] font-[500] mb-4">New Release</div>
        <h2 className="text-[40px] font-bold text-white mb-4">Launch</h2>
        <p className="lg:text-xl  text-[#E0E0E0] mb-8">
          Welcome your business to faster, scalable support.
        </p>
        
        {/* UI Stages - Using imported stages image */}
        <div className="flex justify-center items-center">
          {/* <img src={stages} alt="UI Stages" className="" /> */}
          <Carousel/>
        </div>
      </div>

      {/* Footer */}
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between  items-center py-8 border-t border-white border-opacity-20">
        <div className="text-white text-xs sm:text-base mb-10 sm:mb-0">
          © 2024 Consulting Firm. All rights reserved.
        </div>
        <div className="flex items-center  gap-3 text-white ms-4 ">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </div>
  )
}
