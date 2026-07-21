import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Genres from "../Navbar/Genres";
import SearchBar from "../Navbar/SearchBar";
import AccountDropdown from "../Navbar/AccountDropdown";
import { navLinks } from "../../types";
import { NavLink } from "react-router";

const DesktopNavbar = () => {
  const [onScroll, setOnScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        className={`fixed mx-auto top-0 inset-x-0 w-full max-w-10/11 rounded-xl rounded-tr-none rounded-tl-none flex-between transition-all duration-500 py-2 px-5 max-lg:hidden ${onScroll ? "bg-neutral" : ""}`}
      >
        <div className="flex-center gap-6">
          <a className="text-sm font-bebas font-bold tracking-widest text-white transition-all duration-500">
            Josseun video
          </a>

          <ul className="relative flex-center">
            {navLinks.map((nav) => (
              <li className="relative" key={nav.name}>
                <NavLink to={`/${nav.path}`} className={({isActive})=>`nav-hover ${isActive ? "tracking-wider transition-all duration-500 bg-tertiary rounded-md text-text px-4 py-2 font-bold cursor-pointer text-lg" : ""}`}>
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <ul className="relative flex-center">
          <li className="relative">
            <Icon
              onClick={handleClick}
              className={`nav-icon ${isOpen ? "bg-white rounded-full text-neutral" : ""}`}
              icon="material-symbols:search"
            />
            <SearchBar isOpen={isOpen} />
          </li>

          <li className="relative nav-icon group">
            <Icon className="size-6" icon="lucide:grip" />
            {/* Genres */}
            <Genres />
          </li>
          <li className="relative nav-icon group">
            <Icon className="size-6" icon="iconamoon:profile" />
            <AccountDropdown />
          </li>
          <li className="relative">
            <button className="px-3 py-2 bg-info text-white rounded-md font-bold font-inter tracking-wide text-md cursor-pointer hover:bg-info/60">
              Join Josseun
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default DesktopNavbar;
