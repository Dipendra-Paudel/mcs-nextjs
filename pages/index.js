import HeadTag from "../utils/HeadTag";
import Navigation from "../components/Static/Navigation/Navigation";
import HeroSection from "../components/Home/HeroSection";
import BestServices from "../components/Home/BestServices";
import MakeAnAppointment from "../components/Home/MakeAnAppointment";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
