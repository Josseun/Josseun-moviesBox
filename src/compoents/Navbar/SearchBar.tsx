import { Icon } from "@iconify/react";

const SearchBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div>
      <div
        className={`bg-neutral p-8 fixed top-20 left-1/2 -translate-x-1/2 w-8/12 max-lg:w-full max-md:max-w-125 md:max-w-190 rounded-2xl ${isOpen ? "block transition-all duration-700" : "hidden"}`}
      >
        <input
          type="search"
          placeholder="Search"
          className="w-full h-14 bg-secondary px-12 text-white text-xl border-[3px] border-white rounded-lg"
        />
        <Icon
          className="nav-icon absolute text-white/70 top-10 left-10 size-10"
          icon="lucide:search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
