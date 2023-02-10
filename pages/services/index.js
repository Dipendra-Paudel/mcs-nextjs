import HeadTag from "../../utils/HeadTag";
import FeelFreeToContact from "../../components/Common/FeelFreeToContact/FeelFreeToContact";
import HeroSection from "../../components/Common/HeroSection";
import AllServices from "../../components/Pages/Services/AllServices";
import Navigation from "../../components/Static/Navigation/Navigation";

const Services = () => {
  return (
    <div>
      <HeadTag
        title="Services"
        keywords="Mister Computer Solutions, Computer Repairing Service, It Support, Computer Repairing Service in Bharatpur Chitwan, Computer Repairing Service in Nepal, Computer Repair, Computer Solutions, Computer Parts, Best Computer Service, Best Computer Repairing Service"
        description="Computer Repairing Service in Bharatpur Chitwan, Nepal"
        ogImage="/mister-computer-solutions.png"
      />
      <Navigation active="Services" />

      <HeroSection title={"Home > Services"} />
      <AllServices />
      <FeelFreeToContact />
    </div>
  );
};

export default Services;
