import { Offcanvas } from "react-bootstrap";

import Menu from "./Menu.js";

const SideBar = ({ sidebar, showsideBar }) => {
  return (
    <>
      {" "}
      <Offcanvas
        backdrop={false}
        scroll={true}
        show={sidebar}
        placement="start"
        onHide={showsideBar}
      >
        <Offcanvas.Header closeButton={true} closeVariant="white">
          <span>منوی کاربری</span>
        </Offcanvas.Header>
        <Offcanvas.Title></Offcanvas.Title>
        <Offcanvas.Body>
          <Menu></Menu>
        </Offcanvas.Body>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "",
              bottom: 0,
              fontSize: 10,
            }}
          >
            {" "}
            حقوق نرم افزار برای شرکت نیکا محفوض است{" "}
          </span>
        </div>
      </Offcanvas>
    </>
  );
};
export default SideBar;
