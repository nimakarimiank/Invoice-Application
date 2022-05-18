import { createContext, useState } from "react";

export const MenuContext = createContext(null);

const MenuContextProvider = ({ children }) => {
  const menuItems = [
    {
      title: "داشبورد",
      icon: "fa fa-home",
      submenu: [
        { title: "داشبورد", icon: "fa fa-bar-chart-o", link: "dashboard" },
        { title: "آمار", icon: "fa fa-lightbulb-o", link: "statistics" },
        
      ],
    },
    {
      title: "کاتالوگ",
      icon: "fa fa-sitemap",
      submenu: [
        { title: "مدیریت محصولات", icon: "fa fa-product-hunt", link: "product" },
        { title: "لیست محصولات", icon: "fa fa-list-alt", link: "productlist" },
        { title: "دسته بندی", icon: "fa fa-book", link: "expenses" },
      ],
    },
    {
      title: "مشتریان",
      icon: "fa fa-user",
      submenu: [
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
      ],
    },
    {
      title: "فروش",
      icon: "fa fa-shopping-bag",
      submenu: [
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
      ],
    },
    {
      title: "مدیریت نرم افزار",
      icon: "fa fa-gear",
      submenu: [
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
      ],
    },
    {
      title: "راهنما",
      icon: "fa fa-question",
      submenu: [
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
      ],
    },
    {
      title: "تماس با شرکت",
      icon: "fa fa-address-card",
      submenu: [
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
        { title: "داشبورد", icon: "fa fa-home", link: "/" },
      ],
    },
  ];
  const [activeMenu, setactiveMenu] = useState(-1000);
  const selectMenu = (index) => {
    setactiveMenu(index);
  };

  return (
    <MenuContext.Provider value={{ selectMenu,menuItems,activeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContextProvider;
