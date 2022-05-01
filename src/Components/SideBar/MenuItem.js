/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuItem = ({ title, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={open ? "active" : ""}>
      <a
        className="nav-link"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <i className={icon}></i>
        <span className="title">{title}</span>
        <span className="fa fa-chevron-left"></span>
      </a>  
      {/* COLLAPSE DOWN BELOW */}
      <div className="nav child_menu">
        <Collapse in={open}>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                {" "}
              <i className="fa fa-bar-chart-o"></i>
              <span className="title">داشبورد</span>
              </Link>
            </li>
          </ul>
        </Collapse>
      </div>
    </li>
  );
};
export default MenuItem;
