import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { BiMenu, BiChevronsLeft, BiSun, BiMoon } from "react-icons/bi";

import { updateMode } from "../../store/theme";
import { useSelector, useDispatch } from "react-redux";

import AppConfig from "../../configs/app-config";

import type { RootStateType } from "../../store";
import type { NavbarProps } from "../../types/layout";

const { sidebarWidth, foldedSidebarWidth } = AppConfig;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: foldedSidebarWidth,
  width: `calc(100% - ${foldedSidebarWidth}px)`,
  ...(!open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: `${sidebarWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginLeft: 0,
  },
}));

const LayoutNavbar = (props: NavbarProps) => {
  const {
    isBelowLg,
    sidebarHidden,
    sidebarFolded,
    setSidebarFolded,
    setSidebarHidden,
  } = props;

  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootStateType) => state.theme);

  const renderToggleIcon = () => {
    if (isBelowLg) {
      return <BiMenu />;
    } else {
      return (
        <Box
          size={32}
          component={BiChevronsLeft}
          sx={{
            transition: "all .25s ease-in-out",
            transform: `rotate(${sidebarFolded ? 180 : 0}deg)`,
          }}
        />
      );
    }
  };

  const handleToggleButtonClick = () => {
    if (isBelowLg) {
      setSidebarHidden(!sidebarHidden);
    } else {
      setSidebarFolded(!sidebarFolded);
    }
  };
  return (
    <StyledAppBar
      elevation={0}
      color="inherit"
      position="fixed"
      open={sidebarFolded}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "divider",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ gap: 0.5, display: "flex", alignItems: "center" }}>
          <IconButton disableRipple onClick={handleToggleButtonClick}>
            {renderToggleIcon()}
          </IconButton>
          <Typography>Add Lab</Typography>
        </Box>
        <IconButton
          sx={{ mr: 2 }}
          onClick={() =>
            dispatch(updateMode(mode === "dark" ? "light" : "dark"))
          }
        >
          {mode === "dark" ? <BiSun /> : <BiMoon />}
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default LayoutNavbar;
