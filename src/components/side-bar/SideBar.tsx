import { useReducer, useState } from "react";

import styled from "styled-components";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Hamburger, Help, ViewList, HandExtended } from "mdi-material-ui";

import pianLogo from "../../assets/red-x-on-pickle.png";

import { grey } from "@mui/material/colors";

type SideBarStateType = {
  [key: string]: {
    isOpen: boolean;
    children: {
      [key: string]: boolean;
    };
  };
};

const SideBarInitialState = {
  burger: {
    isOpen: false,
    children: {
      addBurger: false,
    },
  },
  question: {
    isOpen: false,
    children: {
      about: false,
    },
  },
};

type SideBarActionType = { type: "burgerToggle" } | { type: "questionToggle" };

const reducer = (state: SideBarStateType, action: SideBarActionType) => {
  switch (action.type) {
    case "burgerToggle":
      return {
        ...state,
        burger: {
          ...state["burger"],
          isOpen: !state["burger"].isOpen,
        },
      };
    case "questionToggle":
      return {
        ...state,
        question: {
          ...state["burger"],
          isOpen: !state["question"].isOpen,
        },
      };
    default:
      return state;
  }
};

const SideBar = () => {
  const [state, dispatch] = useReducer(reducer, SideBarInitialState);

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
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoImg src={pianLogo} />
        </Box>
      </Toolbar>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ pl: 3 }}
            onClick={() => dispatch({ type: "burgerToggle" })}
            disableGutters
          >
            <ListItemIcon>
              <Hamburger />
            </ListItemIcon>
            <ListItemText primary="햄버거" />
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <ExpandMoreIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={state["burger"].isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 10 }} disableGutters>
                <ListItemText sx={{ padding: 0 }} inset>
                  <Typography variant="body2">버거 목록 보기</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ pl: 3 }}
            onClick={() => dispatch({ type: "questionToggle" })}
            disableGutters
          >
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="사이트에 대하여" />
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <ExpandMoreIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={state["question"].isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 10 }} disableGutters>
                <ListItemText sx={{ padding: 0 }} inset>
                  <Typography variant="body2">소개</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

const LogoImg = styled.img`
  width: 4rem;
`;

export default SideBar;
