import { Dropdown } from "react-bootstrap";

import { Container, Navbar } from "react-bootstrap";

const AppHeader = ({showsideBar}) => {
    const userName = "نیماکریمیان"; // comes from database
    const dropDownList = ["تنظیمات", "خروج"]; //comes from database later on,
   
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Dropdown style={{ direction: "rtl" }} className="user-profile">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <img alt="nima" src="/admin.png" />
              <span>{userName}</span>
            </Dropdown.Toggle>
            {/* Dropdown Toggleable button*/}
            <Dropdown.Menu>
              {dropDownList.map((value) => {
                return (
                  <Dropdown.Item style={{ textAlign: "center" }}>
                    {value}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>{" "}
            {/* Dropdown Items*/}
          </Dropdown>
          <Navbar.Brand style={{ position: "absolute", right: 70 }} href="#">
            {" "}
            {/* CSS IS PROBABLY RISKY*/}
            <span>مدیریت فاکتور</span>
          </Navbar.Brand>
          <Navbar.Toggle onClick={showsideBar} aria-controls="offcanvasNavbar" />

        </Container>
      </Navbar>
    </>
  );
};
export default AppHeader;
