import { Dispatch, ReactNode } from "react";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Typography,
  SvgIconTypeMap,
} from "@mui/material";

import { SideBarActionType } from "../SideBar";

import { ExpandMore } from "@mui/icons-material";

type SideBarItemProps = {
  state: boolean;
  dispatch: Dispatch<SideBarActionType>;
  dispatchActionType: SideBarActionType;
  icon: ReactNode;
  texts: {
    primary: string;
    children: string[];
  };
};

const SideBarItem = ({
  state,
  dispatch,
  dispatchActionType,
  icon,
  texts,
}: SideBarItemProps) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          sx={{ pl: 3 }}
          onClick={() => dispatch(dispatchActionType)}
          disableGutters
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={texts.primary} />
          <ListItemIcon sx={{ justifyContent: "center" }}>
            <ExpandMore />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Collapse in={state} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {texts.children.map((childText) => (
            <ListItem key={childText} disablePadding>
              <ListItemButton sx={{ pl: 10 }} disableGutters>
                <ListItemText sx={{ padding: 0 }} inset>
                  <Typography variant="body2">{childText}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SideBarItem;
