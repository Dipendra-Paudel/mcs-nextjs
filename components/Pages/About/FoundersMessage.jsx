const FoundersMessage = () => {
  return (
    <div className="p-6 pb-0 md:p-10 md:pb-0 lg:px-16">
      <div className="common-style-2 space-y-6 md:space-y-12 lg:space-y-0 lg:flex lg:space-x-10 pt-5">
        <div className="w-[260px] h-[260px] mx-auto rounded-full overflow-hidden lg:overflow-visible lg:w-[400px] lg:h-[500px] xl:w-[450px]">
          <img
            src="/founder.jpg"
            alt="Computer Repairing Mister Computer Solutions"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-0 lg:space-y-2 lg:flex-1 text-gray-600">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 text-center lg:text-left">
            Founder{"'"}s Message
          </h1>

          <h3 className="font-semibold text-sm lg:text-base text-gray-700 text-center lg:text-left">
            Deepesh Paudel, Founder & CEO
          </h3>

          <div className="pt-4">
            <p>
              With over 2 years of experience in computer repairing, I founded
              Mister Computer Solutions to provide top-notch repair services
              with a personal touch. My journey in the tech world started with a
              passion for solving complex problems and helping others navigate
              the digital landscape. Over the years, I have seen how critical
              reliable computer repair services are for individuals and
              businesses alike.
            </p>
            <br />

            <p>
              At Mister Computer Solutions, we believe in delivering not just a
              service, but a solution tailored to each client{"'"}s needs. Our
              mission is to ensure that your technology works seamlessly,
              allowing you to focus on what truly matters. From hardware repairs
              to software support, we are committed to excellence and customer
              satisfaction.
            </p>
            <br />

            <p>
              Thank you for choosing Mister Computer Solutions. We look forward
              to serving you and becoming your trusted partner in all tech
              things. Warm regards, Deepesh Paudel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersMessage;
