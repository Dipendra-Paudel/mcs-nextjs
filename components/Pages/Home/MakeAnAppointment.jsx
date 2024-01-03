import Link from "next/link";
import ButtonAnimation from "../../Common/Button/ButtonAnimation";

const MakeAnAppointment = () => {
  return (
    <div className="common-style relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <img
          src="/images/home/make-an-appointment.webp"
          alt="Make An Appointment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
      <div className="common-style-2 relative z-10 text-white space-y-3 py-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold">
          Make An Appointment
        </h2>
        <div className="text-gray-300 max-w-2xl text-center mx-auto pb-5 text-sm md:text-base">
          To schedule computer services with Mister Computer Solutions, please
          visit our{" "}
          <Link href={"/contact"} passHref>
            <a className="text-primary font-semibold">Contact Page</a>
          </Link>{" "}
          for location details, phone number, and to view our Google Maps
          location.
        </div>
        <div className="flex justify-center">
          <ButtonAnimation
            link="/contact"
            label="Make Appointment"
            color="red"
          />
        </div>
      </div>
    </div>
  );
};
export default MakeAnAppointment;
