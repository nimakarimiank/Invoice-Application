import { Offcanvas } from "react-bootstrap";
import MenuContextProvider from "../../Contexts/MenuContext.js";

import Menu from "./Menu.js";

const SideBar = ({ sidebar, showsideBar }) => {
  return (
    <>
      {" "}
      <Offcanvas
        backdrop={false}
        show={sidebar}
        placement="start"
        scroll={true}
        onHide={showsideBar}
      >
        <Offcanvas.Header closeButton={true} closeVariant="white">
          <span>منوی کاربری</span>
        </Offcanvas.Header>
        <Offcanvas.Title></Offcanvas.Title>
        <Offcanvas.Body>
          <MenuContextProvider>
            {" "}
            <Menu></Menu>
          </MenuContextProvider>
        </Offcanvas.Body>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "fixed",
              bottom: 15,
              right: 20,
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
