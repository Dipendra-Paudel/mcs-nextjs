const MainPage = () => {
  return (
    <div className="p-6 pb-0 md:p-10 md:pb-0 lg:px-16">
      <div className="common-style-2 space-y-12 lg:space-y-0 lg:flex lg:space-x-10 pt-5">
        <div className="space-y-5 lg:flex-1 xl:space-y-8 text-gray-600">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800">
            We make computers work for you
          </h1>
          <div>
            <b>Computer Problem? No Problem!</b> We provide almost every service
            that makes your computer work fast and solve any computer related
            problems.
          </div>
          <div>Free computer service if we can{"'"}t fix the problem.</div>
        </div>
        <div className="lg:flex-1">
          <img
            src="/images/about-us/computer-repairing.jpg"
            alt="Computer Repairing Mister Computer Solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
