import mockup from "../assets/images/mockup.svg";
import Carousel from "./Carousel";
import EmailForm from "./EmailForm";

export default function Landing() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="text-center pt-10 pb-4">
        <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-[#E0E0E0] mb-6">
          Triple S got your back!
        </h1>
        <p className="lg:text-2xl text-[16px] text-[#fff] font-bold mb-8  mx-auto">
          Triple S is a smart and user-friendly support system designed to
          streamline communication between companies, employees, admins, and
          guests.
        </p>

        {/* Email Signup */}
     <EmailForm/>
        {/* Product Mockups - Using imported images */}
        <div className="relative flex justify-center items-center ">
          <img src={mockup} alt="Product Mockup" className="" />
        </div>
      </div>

      {/* New Release Section */}
      <div className="text-center  lg:pb-20">
        <div className="text-[#E0E0E0] font-[500] mb-4">New Release</div>
        <h2 className="text-[40px] font-bold text-white mb-4">Launch</h2>
        <p className="lg:text-xl  text-[#E0E0E0] lg:mb-8">
          Welcome your business to faster, scalable support.
        </p>

        {/* UI Stages - Using imported stages image */}
        <div className="flex justify-center items-center">
          {/* <img src={stages} alt="UI Stages" className="" /> */}
          <Carousel />
        </div>
      </div>

      {/* Footer */}
      <div className="flex lg:flex-row flex-col justify-center lg:justify-between  items-center py-8 border-t border-white border-opacity-20">
        <div className="text-white text-xs sm:text-base 10 sm:mb-0">
          © 2025 TripleS.All rights reserved.
        </div>
        {/* <div className="flex items-center  gap-3 text-white ms-4 ">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div> */}
      </div>
    </div>
  );
}



