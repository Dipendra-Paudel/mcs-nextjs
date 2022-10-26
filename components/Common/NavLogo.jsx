import React from "react";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/" passHref={true}>
      <div className="h-10 cursor-pointer">
        <img
          src="/mister-computer-solutions.svg"
          alt="Mister Computer Solutions"
          className="h-full"
        />
      </div>
    </Link>
  );
};

export default NavLogo;
