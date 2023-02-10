import FeelFreeToContact from "../../components/Common/FeelFreeToContact/FeelFreeToContact";
import HeroSection from "../../components/Common/HeroSection";
import Navigation from "../../components/Static/Navigation/Navigation";
import HeadTag from "../../utils/HeadTag";

const ITSupport = () => {
  return (
    <div>
      <HeadTag
        title="IT Support"
        keywords="About Us, About Mister Computer Solutions, Mister Computer Solutions, Computer Repairing Service, It Support, Computer Repairing Service in Bharatpur Chitwan, Computer Repairing Service in Nepal, Computer Repair, Computer Solutions, Computer Parts, Best Computer Service, Best Computer Repairing Service"
        description="We provide almost every service that makes your computer work fast and solve any computer related problems."
        ogImage="/images/about-us/computer-repairing.jpg"
      />

      <Navigation active="IT Support" />
      <HeroSection title="Home > IT Support" />
      <div>IT Support</div>
      <FeelFreeToContact />
    </div>
  );
};

export default ITSupport;
