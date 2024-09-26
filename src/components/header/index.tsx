import SiteLogo from "./SiteLogo";
import { useState } from "react";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuItem } from "../../types";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface props {
  header: {
    siteLogo: {
      logo: string;
      alt: string;
    };
    menu: MenuItem[];
  };
}

const Header = ({ header }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const { siteLogo, menu } = header;

  return (
    <header className="bg-white dark:bg-black relative">
      <div className="header-section container flex justify-between items-center gap-3 p-3 sm:p-0">
        {siteLogo && (
          <div className="logo">
            <SiteLogo />
          </div>
        )}
        <div className="nav-wrap hidden sm:flex justify-start items-center gap-3">
          <Navigation menus={menu} />
          <ThemeSwitcher />
        </div>

        <div className="sm:hidden flex justify-center items-start gap-4">
          <button
            onClick={handleChange}
            className="text-gray-700 focus:outline-none h-6 w-6"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden absolute top-16 w-full h-custom bg-white dark:bg-black transition-transform duration-300 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isOpen && (
          <div className={isOpen ? "visible" : "invisible"}>
            <MobileMenu menus={menu} closeMenu={closeMenu}/>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
