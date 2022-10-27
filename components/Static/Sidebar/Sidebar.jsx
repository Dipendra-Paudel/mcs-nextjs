import React from "react";
import Link from "next/link";
import { navigationOptions } from "../options";
import NavLogo from "../../Common/NavLogo";
import ButtonAnimation from "../../Common/Button/ButtonAnimation";

const Sidebar = ({ toggled, changeToggled, active }) => {
  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black transition-all duration-500 ${
          toggled ? "z-50 bg-opacity-40" : "-z-10 bg-opacity-0"
        }`}
        onClick={() => changeToggled(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 bg-red-400 h-screen z-50 transition-all duration-500 overflow-hidden ${
          toggled ? "w-64" : "w-0"
        }`}
      >
        <div className="absolute bg-white h-full top-0 w-64 py-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="px-10">
              <NavLogo />
            </div>
            <div className="flex flex-col border-t">
              {navigationOptions.map((option, index) => {
                const { label, url } = option;
                return (
                  <Link key={index} href={url} passHref={true}>
                    <a
                      className={`py-3 px-10 hover:text-primary transition-all duration-300 border-b border-gray-200 ${
                        active === label ? "text-primary" : ""
                      }`}
                    >
                      {label}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="px-6 pb-12 w-full">
            <ButtonAnimation
              link="/services"
              label="Need Service?"
              color="red"
              classes="w-full text-center block"
              handleClick={() => window.scrollTo(0, 0)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
