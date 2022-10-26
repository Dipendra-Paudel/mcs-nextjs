import ButtonAnimation from "../Common/Button/ButtonAnimation";

const HeroSection = () => {
  return (
    <div className="common-style">
      <div className="common-style-2 space-y-12 lg:space-y-0 lg:flex lg:space-x-10 py-5">
        <div className="space-y-5 lg:flex-1 xl:space-y-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800">
            Always there when your computer needs repair
          </h1>
          <div className="text-gray-600">
            Mister Computer Solutions - A leading IT and computer service
            provider providing home services for Software/Hardware Installation
            , Maintenance And Repair.
          </div>
          <ul className="list-disc list-outside pl-4 text-gray-600 space-y-2  lg:space-y-3">
            <li>
              <b className="text-gray-700">Install</b>,{" "}
              <b className="text-gray-700">Upgrade</b> and{" "}
              <b className="text-gray-700">Repair</b> your{" "}
              <b className="text-gray-700">Computer System</b>
            </li>
            <li>
              Provide you the{" "}
              <b className="text-gray-700">Best Computer Parts</b> available
            </li>
            <li>
              <b className="text-gray-700">Home Delivery Service</b> all over{" "}
              <b className="text-gray-700">Bharatpur</b>, Chitwan
            </li>
            <li>
              <b className="text-gray-700">Home Delivery Service</b> all over{" "}
              <b className="text-gray-700">Bharatpur</b>, Chitwan
            </li>
          </ul>

          <ButtonAnimation
            link="/appointment"
            label="Make Appointment"
            size="big"
            classes="block sm:inline-block text-center"
          />
        </div>
        <div className="lg:flex-1">
          <img
            src="/images/home/motherboard-repair.webp"
            alt="Mister Computer Solutions Laptop motherboard repair"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
