import React from "react";
import Link from "next/link";
import NavLogo from "../../Common/NavLogo";
import FacebookIcon from "../../../icons/facebook";
import InstagramIcon from "../../../icons/instagram";

const quickLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "IT Support",
    url: "/it-support",
  },
  {
    label: "About us",
    url: "/about-us",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const iconWidth = 25;

const socialSites = [
  {
    label: "Facebook",
    icon: <FacebookIcon width={iconWidth} />,
    url: "https://www.facebook.com/MisterComputerSolutions",
  },
  {
    label: "Instagram",
    icon: <InstagramIcon width={iconWidth} />,
    url: "https://www.instagram.com/mistercomputersolutions",
  },
];

const Footer = () => {
  return (
    <div className="text-gray-700 text-center lg:text-left border-t border-gray-300">
      <div className="p-6 py-10 md:px-8 md:pt-12 lg:px-16 lg:pt-16">
        <div className="common-style-2 text-sm">
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-10">
            <div className="lg:col-span-3 space-y-3 px-4 sm:px-0">
              <div className="flex justify-center lg:justify-start">
                <NavLogo />
              </div>
              <div className="pt-2">
                A leading IT and computer service provider providing home
                services for Software/Hardware Installation , Maintenance And
                Repair.
              </div>

              {/* Social site icons */}
              <div className="flex justify-center lg:justify-start pt-2 text-gray-800">
                {socialSites.map((site, index) => {
                  const { icon, url, label } = site;
                  return (
                    <a
                      key={index}
                      href={url}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className={index === 1 ? "ml-4 mr-5" : ""}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="px-4 sm:px-0 lg:col-span-2">
              <div className="text-xl font-semibold text-gray-800">
                QUICK LINKS
              </div>
              <div className="pt-3 space-y-3">
                {quickLinks.map((quickLink, index) => {
                  const { label, url } = quickLink;

                  return (
                    <div key={index}>
                      <Link href={url} passHref>
                        <a className="hover:text-secondary hover:underline">
                          {label}
                        </a>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact */}
            <div className="px-4 sm:px-0 lg:col-span-2">
              <div className="text-xl font-semibold text-gray-800">CONTACT</div>
              <div className="pt-3 space-y-3 flex flex-col">
                <a href="tel:+9779845755635">+977 9845755635</a>
                <a href="mailto:info@mistercomputersolutions.com.np">
                  info@mistercomputersolutions.com.np
                </a>
                <div>Birendra Campus Chowk</div>
                <div>Bharatpur, Chitwan</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-800 px-4 pt-10 text-center">
            © 2022 Mister Computer Solutions. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
