/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Outlet } from "react-router-dom";
import MenuItem from "./MenuItem";
const Menu = () => {

  const menuItems = [
    { title: "داشبورد", icon: "fa fa-home" },
    { title: "کاتالوگ", icon: "fa fa-sitemap" },
    { title: "مشتریان", icon: "fa fa-user" },
    { title: "فروش", icon: "fa fa-shopping-bag" },
    { title: "مدیریت نرم افزار", icon: "fa fa-gear" },
    { title: "راهنما", icon: "fa fa-question" },
    { title: "تماس با شرکت", icon: "fa fa-address-card" },
  ];
  return (
    <div className="menu_section">
      <ul className="nav side-menu page-sidebar-menu side-show">
        {menuItems && menuItems.map((value) => {
          return <MenuItem title={value.title} icon={value.icon} />;
        })}
      </ul>
    </div>
  );
};
export default Menu;
