import { ReactNode } from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};

export default Main;
