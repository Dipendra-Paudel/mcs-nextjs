import FeelFreeToContact from "../../components/Common/FeelFreeToContact/FeelFreeToContact";
import HeroSection from "../../components/Common/HeroSection";
import ServiceDescription from "../../components/Pages/IndividualService/ServiceDescription";
import Navigation from "../../components/Static/Navigation/Navigation";
import HeadTag from "../../utils/HeadTag";
import services from "../../utils/services";

const IndividualService = ({ service }) => {
  const serviceName = service?.serviceName;

  return (
    <div>
      <HeadTag
        title={serviceName}
        keywords="Mister Computer Solutions, Computer Repairing Service, It Support, Computer Repairing Service in Bharatpur Chitwan, Computer Repairing Service in Nepal, Computer Repair, Computer Solutions, Computer Parts, Best Computer Service, Best Computer Repairing Service"
        description="Computer Repairing Service in Bharatpur Chitwan, Nepal"
        ogImage="/mister-computer-solutions.png"
      />

      <Navigation active="Services" />
      <HeroSection title={`Home > Services > ${service?.serviceName}`} />
      <ServiceDescription service={service} />
      <FeelFreeToContact />
    </div>
  );
};

export const getServerSideProps = (context) => {
  const slug = context.params.slug;

  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return { props: { service } };
};

export default IndividualService;
