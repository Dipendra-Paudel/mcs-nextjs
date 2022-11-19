import ButtonAnimation from "../../Common/Button/ButtonAnimation";

const FeelFreeToContact = () => {
  return (
    <div className="common-style bg-gray-100 relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <img
          src="/images/home/feel-free-to-contact.webp"
          alt="Make An Appointment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="common-style-2 relative z-10">
        <div className="lg:flex py-4 justify-between items-center space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="text-2xl lg:text-3xl font-semibold text-white">
              Do you have any question? Feel free to contact.
            </div>
            <div className="text-gray-200 text-sm md:text-base">
              Bring your valuable desktop, laptop, Macbook, tab or gaming pc. We
              are happy to serve our best to you.
            </div>
          </div>
          <div className="flex-1 lg:text-center flex items-center justify-center sm:block">
            <ButtonAnimation
              link="/appointment"
              label="Contact Now"
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelFreeToContact;
