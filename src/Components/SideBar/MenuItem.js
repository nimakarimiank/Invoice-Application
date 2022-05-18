/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Contexts/MenuContext";

const MenuItem = ({ title, icon, submenu, index }) => {
  const { selectMenu, activeMenu } = useContext(MenuContext);
  return (
    <li className={activeMenu === index ? "active" : ""}>
      <a
        className="nav-link"
        onClick={() => {
          if(activeMenu===index){
            selectMenu(-1000);
          } // closes the submenu if clicks again!!! :)))
          else{
            selectMenu(index);}
        }}
      >
        <i className={icon}></i>
        <span className="title">{title}</span>
        <span className="fa fa-chevron-left"></span>
      </a>
      {/* COLLAPSE DOWN BELOW */}
      <div className="nav child_menu">
        <Collapse in={activeMenu === index}>
          <ul>
            {submenu.map((value, index) => {
              return (
                <>
                  <li>
                    <Link to={value.link} className="nav-link">
                      <i className={value.icon}></i>
                      <span className="title">{value.title}</span>{" "}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </Collapse>
      </div>
    </li>
  );
};
export default MenuItem;
