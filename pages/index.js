import HeadTag from "../utils/HeadTag";
import HeroSection from "../components/Home/HeroSection";
import BestServices from "../components/Home/BestServices";
import MakeAnAppointment from "../components/Home/MakeAnAppointment";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeadTag title="Mister Computer Solutions" />

      <HeroSection />
      <BestServices />
      <MakeAnAppointment />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
