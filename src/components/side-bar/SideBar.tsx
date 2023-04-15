import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { grey } from "@mui/material/colors";

const SideBar = () => {
  const drawerWidth = 240;
  const backdropColor = grey[50];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
          backgroundColor: backdropColor,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar disableGutters sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "primary.main",
          }}
        ></Box>
      </Toolbar>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
