import { MenuItem } from "../../types";
import { Link } from "react-router-dom";
interface props {
  menus: MenuItem[];
}

const Navigation = ({ menus }: props) => {
  return (
    <ul className="menu">
      {menus?.map((menu, index) => (
        <li key={`menu-${index}`} className="inline-block">
          <Link to={menu?.url} className="p-3">
            {menu?.title}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
