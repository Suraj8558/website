import SiteLogo from "./SiteLogo";
import Navigation from "./Navigation";
// import ThemeSwitcher from "./ThemeSwitcher";
import { MenuItem } from '../../types';
interface props {
  header: {
    siteLogo: {
      logo: string,
      alt: string
    }
    menu: MenuItem[]
  }
}
const Header = ({header} : props) => {
  const { siteLogo, menu} =  header;
  return (
    <header className="bg-white">
      <div className="header-section container flex justify-between	 items-center gap-3 py-3">
        {siteLogo && (
          <div className="logo">
            <SiteLogo />
          </div> 
        )}

        <div className="nav-wrap flex justify-start items-center gap-3">
          <Navigation menus={menu}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
