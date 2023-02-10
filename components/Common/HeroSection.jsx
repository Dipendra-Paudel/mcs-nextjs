const HeroSection = ({ title }) => {
  return (
    <div
      className="h-60 md:h-80 bg-fixed"
      style={{ backgroundImage: "url('/hero-section.jpg')" }}
    >
      <div className="w-full h-full text-white bg-black bg-opacity-60 px-4 flex items-center justify-center">
        <div>{title}</div>
      </div>
    </div>
  );
};

export default HeroSection;
