import { Fragment } from "react";
import FeelFreeToContact from "../../components/Common/FeelFreeToContact/FeelFreeToContact";
import HeroSection from "../../components/Common/HeroSection";
import GoogleMap from "../../components/Pages/About/GoogleMap";
import MainPage from "../../components/Pages/About/MainPage";
import WhyChooseUs from "../../components/Pages/Home/WhyChooseUs";
import Navigation from "../../components/Static/Navigation/Navigation";
import HeadTag from "../../utils/HeadTag";

const AboutUs = () => {
  return (
    <Fragment>
      <HeadTag
        title="About Us"
        keywords="About Us, About Mister Computer Solutions, Mister Computer Solutions, Computer Repairing Service, It Support, Computer Repairing Service in Bharatpur Chitwan, Computer Repairing Service in Nepal, Computer Repair, Computer Solutions, Computer Parts, Best Computer Service, Best Computer Repairing Service"
        description="We provide almost every service that makes your computer work fast and solve any computer related problems."
        ogImage="/images/about-us/computer-repairing.jpg"
      />

      <Navigation active="About Us" />
      <HeroSection title="Home > About Us" />
      <MainPage />
      <WhyChooseUs />
      <GoogleMap />
      <FeelFreeToContact />
    </Fragment>
  );
};

export default AboutUs;
