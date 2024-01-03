import Image from "next/image";

const ServiceDescription = ({ service }) => {
  const { id, serviceName, image, description } = service;

  return (
    <div className="p-6 md:p-10 lg:px-16 xl:py-16">
      <div className="common-style-2 space-y-6 text-justify leading-7">
        <div className="md:flex md:space-x-10">
          <div className="hidden md:block h-72 lg:h-96 relative flex-1">
            <Image src={image} alt={serviceName} layout="fill" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="font-bold text-xl md:text-2xl">{serviceName}</div>
            <div className="text-gray-600">{description[0]}</div>
            <div className="text-gray-600">{description[1]}</div>
          </div>

          <div className="md:hidden h-72 lg:h-96 relative flex-1 mt-6">
            <Image src={image} alt={serviceName} layout="fill" />
          </div>
        </div>

        <div className="space-y-3">
          {description.slice(2, description.length).map((d, index) => (
            <p key={index} className="text-gray-600">
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
