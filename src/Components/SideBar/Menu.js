/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import MenuItem from "./MenuItem";









const Menu = () => {
  const {menuItems}=useContext(MenuContext)
  // example of menuList coming from Database
  return (
    <div className="menu_section">
      <ul className="nav side-menu page-sidebar-menu side-show">
        {menuItems &&
          menuItems.map((value,index) => {
            return <MenuItem index={index} title={value.title} icon={value.icon} submenu={value.submenu}/>;
          })}
      </ul>
    </div>
  );
};
export default Menu;
