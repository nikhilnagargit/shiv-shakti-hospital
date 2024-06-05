import Home from "@/Components/Main/Home/Home";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
import Reviews from "./Review/Reviews";
import Hero from "./Hero/Hero";

const Main = () => {
  return (
    <div>
      <div className=" max-w-[1550px] m-auto">
        <Hero></Hero>
      </div>

      <div className="m-auto max-w-[1250px] px-5 md:px-16">
        <Home />
        <Services />
        <Doctors />
        <Reviews />
      </div>
    </div>
  );
};

export default Main;
