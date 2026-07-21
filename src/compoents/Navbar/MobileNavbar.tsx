import { Icon } from "@iconify/react";
import AccountDropdown from "./AccountDropdown";
import { useState } from "react";
import SearchBar from "./SearchBar";
import MenuDropdown from "./MenuDropdown";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-text text-white flex justify-around items-center mx-auto py-5 lg:hidden">
        <button className="relative flex cursor-pointer text-sm font-inter font-bold tracking-widest text-white transition-all duration-500 group">
          Menu
          <Icon
            className="group-hover:transition-all duration-500 group-hover:rotate-180 size-6"
            icon="lucide:chevron-down"
          />
          <div className="w-50 bg-neutral opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible p-8 absolute top-10 left-0 rounded-2xl font-bebas text-white/50 tracking-wider backdrop-blur-xl">
            <MenuDropdown />
          </div>
        </button>
        <a className="text-sm font-inter font-bold tracking-widest text-white transition-all duration-500">
          Josseun video
        </a>

        <div className="relative flex gap-2">
          <button onClick={handleClick} className="relative">
            <Icon
              className={`nav-icon m-0 ${isOpen ? "bg-white rounded-full text-neutral" : ""}`}
              icon="material-symbols:search"
            />

            <SearchBar isOpen={isOpen} />
          </button>
          <button className="flex-center group relative uppercase font-manrope text-sm text-white tracking-wider hover:bg-tertiary hover:rounded-md hover:text-text hover:px-2 cursor-pointer font-bold">
            <span>EN</span>
            <Icon
              className="group-hover:transition-all duration-500 group-hover:rotate-180 size-6"
              icon="lucide:chevron-down"
            />
          </button>
          <button className="relative nav-icon m-0 group">
            <Icon className="size-6" icon="iconamoon:profile" />

            <AccountDropdown />
          </button>
        </div>
      </header>
    </div>
  );
};

export default MobileNavbar;
