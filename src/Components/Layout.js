import { useState } from "react";
import { Stack } from "react-bootstrap";
import AppHeader from "./AppHeader/AppHeader";
import AppContent from "./AppContent/AppContent";
import SideBar from "./SideBar/SideBar";
import React, { useContext } from "react";
import PreloadingPage from "./PreloadingPage/PreloadingPage";
import { LoaderContext } from "../Contexts/LoaderContext";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarExpanded = () => {
    setSidebar(!sidebar);
  }; //Expands the menu tab
  const { load } = useContext(LoaderContext);

  if (load === true) {
    return (
      <>
        <div>
          <Stack
            gap={10}
            className="main"
            style={{ direction: "ltr", marginRight: sidebar ? 230 : 0 }}
          >
            <AppHeader showsideBar={sidebarExpanded} />
            <AppContent />
            {/* AppFooter To Be Inserted */}
          </Stack>
          <SideBar sidebar={sidebar} showsideBar={sidebarExpanded} />

          <hr />
        </div>
      </>
    );
  } else {
    return <PreloadingPage></PreloadingPage>;
  }
};
export default Layout;
