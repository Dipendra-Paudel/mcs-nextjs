import Image from "next/image";
import Link from "next/link";

const contactOptions = [
  {
    title: "LOCATION",
    content: "Bharatpur - 10, Chitwan",
    image: "/images/contact/location.png",
    link: "https://www.google.com/maps/dir/Mister+Computer+Solutions+Birendra+Campus+Gate+10+Bharatpur+44207/@27.6863799,84.4290686,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3994fbc6dcb0398b:0xa45b66d070bbb6fe!2m2!1d84.4290686!2d27.6863799",
    target: "_blank",
  },
  {
    title: "PHONE",
    content: "+977 9845755635",
    image: "/images/contact/call.png",
    link: "tel:+9779845755635",
  },
  {
    title: "EMAIL",
    content: "mistercomputersolutions@gmail.com",
    image: "/images/contact/email.png",
    link: "mailto:mistercomputersolutions@gmail.com",
  },
];

const GetInTouch = () => {
  return (
    <div className="common-style">
      <div className="common-style-2 space-y-[30px]">
        <div className="text-center space-y-2">
          <h1 className="text-3xl xl:text-3xl font-extrabold text-gray-800">
            Get In Touch
          </h1>
          <div className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            voluptate nobis reiciendis?
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-[30px]">
          {contactOptions.map((option, index) => {
            const { title, content, image, link, target = "_top" } = option;

            return (
              <Link key={index} href={link} passHref>
                <a
                  target={target}
                  className="block p-4 text-center bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  <div className="relative w-20 h-20 mx-auto flex items-end justify-center">
                    {index === 1 ? (
                      <div className="w-16 h-16 relative">
                        <Image src={image} alt={title} layout="fill" />
                      </div>
                    ) : (
                      <Image src={image} alt={title} layout="fill" />
                    )}
                  </div>
                  <div className="text-gray-700 font-semibold pt-4">
                    {title}
                  </div>
                  <div className="text-gray-600">{content}</div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
