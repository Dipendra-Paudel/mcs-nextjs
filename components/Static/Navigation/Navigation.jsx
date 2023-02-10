import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import NavLogo from "../../Common/NavLogo";
import HamburgerMenu from "../../Common/HamburgerMenu";
import ButtonAnimation from "../../Common/Button/ButtonAnimation";
import { navigationOptions } from "../options";

const Navigation = ({ active }) => {
  const [toggled, setToggled] = useState(false);

  const changeToggled = (bool) => {
    setToggled(bool);
  };

  return (
    <>
      <div className="bg-white px-6 pt-2 md:px-10 lg:px-16 xl:px-20 border-b border-gray-300 text-gray-600">
        <div className="common-style-2">
          <div className="flex justify-end text-xs text-gray-600 space-x-2">
            <div className="font-semibold border-r border-gray-400 pr-2">
              Support
            </div>
            <div>
              <Link href="/contact">Contact:</Link>{" "}
              <a href="tel:+9779845755635">+977 9845755635</a>
            </div>
          </div>
          <div className="py-4 flex items-center justify-between sticky top-0">
            <div className="flex items-center md:space-x-10 lg:space-x-32">
              <NavLogo />

              <div className="hidden md:flex md:space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
                {navigationOptions.map((option, index) => {
                  const { label, url } = option;
                  return (
                    <Link href={url} key={index} passHref={true}>
                      <a
                        className={`hover:text-primary transition-all duration-300 ${
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

            <div className="md:hidden">
              <HamburgerMenu toggled={toggled} changeToggled={changeToggled} />
            </div>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
              <ButtonAnimation
                link="/services"
                label="Need Service?"
                size="small"
                color="red"
                handleClick={() => window.scrollTo(0, 0)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Sidebar
          toggled={toggled}
          changeToggled={changeToggled}
          active={active}
        />
      </div>
    </>
  );
};

export default Navigation;
