import { NavLink } from "react-router";
import { genresNav } from "../../types";

const Genres = () => {
  return (
    <>
      <div className="w-100 bg-neutral opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible h-110 p-8 absolute top-15 -right-50 rounded-2xl font-bebas text-white/50 tracking-wider backdrop-blur-xl flex flex-col gap-5">
        <h1>Genres</h1>
        <ul className="grid grid-cols-2 h-full gap-x-6">
          <li className="flex flex-col w-full gap-3">
            {genresNav.left.map((genresLeft) => (
              <NavLink
                to={`/${genresLeft.path}`}
                className="text-white text-[18px] cursor-pointer font-semibold transition hover:text-secondary"
                key={genresLeft.name}
              >
                {genresLeft.name}
              </NavLink>
            ))}
          </li>
          <li className="flex flex-col w-full gap-3">
            {genresNav.right.map((genresRight) => (
              <NavLink
                to={`/${genresRight.path}`}
                className="text-white text-[18px] cursor-pointer font-semibold transition hover:text-secondary"
                key={genresRight.name}
              >
                {genresRight.name}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Genres;