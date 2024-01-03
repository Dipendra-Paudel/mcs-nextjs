import ButtonAnimation from "../../Common/Button/ButtonAnimation";

const HeroSection = () => {
  return (
    <div className="common-style">
      <div className="common-style-2 space-y-12 lg:space-y-0 lg:flex lg:space-x-10 py-1 md:py-5">
        <div className="space-y-5 lg:flex-1 xl:space-y-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            IT Support Center
          </h1>
          <div className="space-y-3">
            <div className="text-gray-600">
              Welcome to Mister Computer Solutions, where technology meets
              seamless performance. We specialize in a wide range of IT services
              to ensure your systems operate at their best. From resolving
              hardware glitches to optimizing software, we{"'"}re your go-to IT
              experts, ready to enhance your digital world. Let{"'"}s make
              technology work for you.
            </div>
            <div className="text-gray-600">
              We{"'"}re dedicated to making technology seamless for you. From
              hardware to software, we{"'"}re your IT experts, ensuring your
              systems run smoothly. Let{"'"}s maximize the power of technology
              together.
            </div>
          </div>

          <ButtonAnimation
            link="/contact"
            label="Get Support"
            color="red"
            size="big"
            classes="block sm:inline-block text-center"
          />
        </div>
        <div className="lg:flex-1">
          <img
            src="/images/home/motherboard-repair.webp"
            alt="Laptop Repair"
            className="w-full h-full max-h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
