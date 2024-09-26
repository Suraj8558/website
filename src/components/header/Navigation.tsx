import { MenuItem } from "../../types";
import { NavLink  } from "react-router-dom";
interface props {
  menus: MenuItem[];
}

const Navigation = ({ menus }: props) => {
  return (
    <ul className="menu">
      {menus?.map((menu, index) => (
        <li key={`menu-${index}`} className="inline-block">
          <NavLink  to={menu?.url} className="link p-4 ">
            {menu?.title}{" "}
          </NavLink >
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
