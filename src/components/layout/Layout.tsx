import Box from "@mui/material/Box";

import Header from "../header/Header";
import Main from "../main/Main";
import SideBar from "../side-bar/SideBar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
      <Main />
    </Box>
  );
};

export default Layout;
