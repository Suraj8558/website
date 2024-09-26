import { MenuItem } from "../../types";
import { NavLink } from "react-router-dom";

interface props {
  menus: MenuItem[];
  closeMenu: () => void;
}

const MobileMenu = ({ menus, closeMenu }: props) => {
  return (
    <ul className="menu flex flex-col gap-4 p-4">
      {menus?.map((menu, index) => (
        <li key={`menu-${index}`}>
          <NavLink
            to={menu?.url}
            className=" link"
            onClick={closeMenu}
          >
            {menu?.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
