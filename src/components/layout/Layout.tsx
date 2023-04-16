import { ReactNode } from "react";

import Box from "@mui/material/Box";

import Header from "../header/Header";
import Main from "../main/Main";
import SideBar from "../side-bar/SideBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <Header />
        <SideBar />
        <Main>{children}</Main>
      </Box>
    </div>
  );
};

export default Layout;
