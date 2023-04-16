import { useReducer } from "react";
import styled from "styled-components";

import { Drawer, Toolbar, List, Box } from "@mui/material";

import SideBarItem from "./side-bar-item/SideBarItem";

import { grey } from "@mui/material/colors";
import { LunchDining, QuestionMark } from "@mui/icons-material";

import pianLogo from "../../assets/red-x-on-pickle.png";

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

export type SideBarActionType =
  | { type: "burgerToggle" }
  | { type: "questionToggle" };

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
        <SideBarItem
          state={state["burger"].isOpen}
          dispatch={dispatch}
          dispatchActionType={{ type: "burgerToggle" }}
          path="/"
          icon={<LunchDining />}
          texts={{
            primary: "햄버거",
            children: ["버거 목록 보기"],
          }}
        />
        <SideBarItem
          state={state["question"].isOpen}
          dispatch={dispatch}
          dispatchActionType={{ type: "questionToggle" }}
          path="/about"
          icon={<QuestionMark />}
          texts={{
            primary: "사이트에 대하여",
            children: ["소개"],
          }}
        />
      </List>
    </Drawer>
  );
};

const LogoImg = styled.img`
  width: 4rem;
`;

export default SideBar;
