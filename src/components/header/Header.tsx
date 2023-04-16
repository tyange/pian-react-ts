import AppBar from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import { Login, Logout, Person } from "@mui/icons-material";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { createAuthStore } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const drawerWidth = 240;
  const headerColor = grey["300"];

  const navigate = useNavigate();
  const { isAuth, authenticated, initAuthentication } = createAuthStore();

  const onHandleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      authenticated();
      localStorage.setItem("userId", result.user.uid);
    } catch (err) {
      console.log(err);
      initAuthentication();
      localStorage.clear();
    }
  };

  const onClickLogoutButton = async () => {
    const currentAuth = getAuth();

    try {
      await signOut(currentAuth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
      localStorage.clear();
    }

    initAuthentication();
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          boxShadow: "none",
          backgroundColor: headerColor,
          minHeight: "64px",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        {isAuth ? (
          <IconButton onClick={onHandleGoogleLogin}>
            <Person />
          </IconButton>
        ) : (
          <IconButton onClick={onHandleGoogleLogin}>
            <Login />
          </IconButton>
        )}
        {isAuth && (
          <IconButton onClick={onClickLogoutButton}>
            <Logout />
          </IconButton>
        )}
      </AppBar>
    </>
  );
};

export default Header;
