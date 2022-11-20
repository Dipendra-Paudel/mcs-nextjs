import { Fragment } from "react";
import HeadTag from "../utils/HeadTag";
import Navigation from "../components/Static/Navigation/Navigation";
import HeroSection from "../components/Pages/Home/HeroSection";
import BestServices from "../components/Pages/Home/BestServices";
import MakeAnAppointment from "../components/Pages/Home/MakeAnAppointment";
import WhyChooseUs from "../components/Pages/Home/WhyChooseUs";
import Testimonials from "../components/Pages/Home/Testimonials";
import FeelFreeToContact from "../components/Common/FeelFreeToContact/FeelFreeToContact";

const Home = () => {
  return (
    <Fragment>
      <HeadTag
        title="Mister Computer Solutions"
        keywords="Mister Computer Solutions, Computer Repairing Service, It Support, Computer Repairing Service in Bharatpur Chitwan, Computer Repairing Service in Nepal, Computer Repair, Computer Solutions, Computer Parts, Best Computer Service, Best Computer Repairing Service"
        description="Computer Repairing Service in Bharatpur Chitwan, Nepal"
        ogImage="/mister-computer-solutions.png"
      />

      <Navigation active="Home" />
      <HeroSection />
      <BestServices />
      <MakeAnAppointment />
      <WhyChooseUs />
      <Testimonials />
      <FeelFreeToContact />
    </Fragment>
  );
};

export default Home;
