import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { grey } from "@mui/material/colors";

const Header = () => {
  const drawerWidth = 240;
  const headerColor = grey["300"];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          boxShadow: "none",
          backgroundColor: headerColor,
        }}
      >
        <Toolbar />
      </AppBar>
    </>
  );
};

export default Header;
