import CardLinkButton from "../Button/CardLinkButton";

const ServiceCard = ({ id, image, serviceName, shortSummary }) => {
  const url = `/services/${id}`;

  return (
    <div className="block border-gray-300 border">
      <div className="h-60 lg:h-72">
        <img
          src={image}
          loading="lazy"
          alt={serviceName}
          className="w-full h-full"
        />
      </div>
      <div className="px-2 pt-3 pb-4 space-y-1.5 text-center">
        <div className="truncate font-medium text-gray-800 uppercase">
          {serviceName}
        </div>
        <div className="text-sm text-gray-500 line-clamp-2 overflow-hidden">
          {shortSummary}
        </div>
        <div className="flex justify-center pt-2">
          <CardLinkButton link={url} label="Read More" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
