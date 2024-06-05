import SectionWrapper from "../SectionWrapper";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <Carousel autoSlide={true} />
    </SectionWrapper>
  );
};

export default Hero;
