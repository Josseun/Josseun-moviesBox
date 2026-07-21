import { NavLink } from "react-router";
import { navLinks } from "../../types";

const MenuDropdown = () => {
  return (
    <ul className="flex flex-col justify-start gap-4">
      {navLinks.map((nav) => (
        <li className="text-start" key={nav.name}>
          <NavLink
            className={({ isActive }) =>
              `nav-hover ${isActive ? "tracking-wider transition-all duration-500 bg-tertiary rounded-md text-text px-4 py-2 font-bold cursor-pointer text-sm" : ""}`
            }
            to={`/${nav.path}`}
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuDropdown;
