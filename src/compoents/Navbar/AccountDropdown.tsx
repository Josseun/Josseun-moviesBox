import { Link } from "react-router";
import { accLinks } from "../../types";

const AccountDropdown = () => {
  return (
    <div>
      <div className="w-50 bg-neutral opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible p-8 absolute top-15 -right-30 max-lg:right-0 rounded-2xl font-bebas text-white/50 tracking-wider backdrop-blur-xl flex flex-col gap-5">
        <h1>Your Account</h1>

        {accLinks.map((link) => (
          <Link
            to={`/${link}`}
            key={link}
            className="text-white text-[18px] max-lg:text-sm tracking-wider font-inter cursor-pointer font-semibold transition hover:text-secondary"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountDropdown;
