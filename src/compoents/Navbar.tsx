import DesktopNavbar from "./Navbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
