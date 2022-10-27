const reasons = [
  {
    image: "/icons/why-choose-us/expert.png",
    title: "Expert Technical Skills",
    description:
      "Our technical experts will get you honest, reliable and professional help.",
  },
  {
    image: "/icons/why-choose-us/friendly.png",
    title: "Friendly Service",
    description:
      "Most of the services are done within hours, and in most cases same day.",
  },
  {
    image: "/icons/why-choose-us/diagnosis.png",
    title: "Affordable Diagnosis",
    description:
      "We will diagnose your issues, provide you with options and give you a price for FREE.",
  },
  {
    image: "/icons/why-choose-us/trustworthy.png",
    title: "Trustworthy",
    description:
      "Our business has been built on trust and customer satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-6 py-10 md:px-8 md:py-12 lg:px-16 lg:py-16">
      <div className="common-style-2 text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Why Choose Us?
        </h3>
        <div className="max-w-lg mx-auto text-sm md:text-base text-gray-700">
          We provide you the best computer services and IT Support throughout
          Bharatpur, Chitwan.
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-6 gap-10 md:gap-8 lg:gap-10">
          {reasons.map((reason, index) => {
            const { image, title, description } = reason;
            return (
              <div key={index} className="space-y-1">
                <div className="inline-block h-20 mx-auto">
                  <img src={image} alt={title} className="h-full" />
                </div>
                <div className="truncate font-medium text-gray-800 uppercase text-lg md:text-base">
                  {title}
                </div>
                <div className="text-sm md:text-xs lg:text-sm text-gray-500 px-2">
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
