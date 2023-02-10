import services from "../../../utils/services";
import ServiceCard from "../../Common/Card/ServiceCard";

const AllServices = () => {
  return (
    <div className="common-style">
      <div className="common-style-2">
        <h2 className="flex-1 text-center font-bold text-2xl md:text-3xl text-gray-800 mb-6">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
