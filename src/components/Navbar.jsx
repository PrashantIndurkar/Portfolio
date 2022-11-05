import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import NavLinks from "../components/NavLinks";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MobileNav from "../components/MobileNav";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-neutral shadow-md mb-4">
      <div className="mx-4 md:mx-6 flex justify-between py-2 md:py-4">
        <a>Prashant</a>
        {navOpen ? (
          <XIcon
            onClick={() => setNavOpen(!navOpen)}
            className="h-6 w-6 cursor-pointer md:hidden"
          />
        ) : (
          <MenuIcon
            onClick={() => setNavOpen(!navOpen)}
            className="h-6 w-6 cursor-pointer md:hidden"
          />
        )}

        {navOpen && <MobileNav />}
      </div>
    </nav>
  );
};

export default Navbar;
