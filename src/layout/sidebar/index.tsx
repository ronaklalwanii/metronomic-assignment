import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { BiX } from "react-icons/bi";

import SidebarList from "./SidebarList";

import AppConfig from "../../configs/app-config";

import type { SidebarProps } from "../../types/layout";

const { foldedSidebarWidth, sidebarWidth } = AppConfig;

const LayoutSidebar = (props: SidebarProps) => {
  const { isBelowLg, sidebarFolded, sidebarHidden, setSidebarHidden } = props;

  return (
    <Drawer
      anchor="left"
      open={isBelowLg ? !sidebarHidden : true}
      variant={isBelowLg ? "temporary" : "permanent"}
      onClose={() => setSidebarHidden(!sidebarHidden)}
      sx={{
        width: sidebarFolded ? foldedSidebarWidth : sidebarWidth,
        "& .MuiDrawer-paper": {
          overflowX: "hidden",
          backgroundColor: "primary.main",
          transition: "width .25s ease-in-out",
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          width: sidebarFolded ? foldedSidebarWidth : sidebarWidth,
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          gap: 1,
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
          <Box sx={{ mt: 1 }}>
            <img src="/images/logo.png" alt="Logo" height={30} />
          </Box>
          {!sidebarFolded ? (
            <Typography variant="h6" color="white">
              MATERNO
            </Typography>
          ) : null}
        </Box>
        {isBelowLg ? (
          <IconButton
            disableRipple
            color="inherit"
            onClick={() => setSidebarHidden(!sidebarHidden)}
          >
            <BiX />
          </IconButton>
        ) : null}
      </Box>

      <SidebarList
        isBelowLg={isBelowLg}
        sidebarFolded={sidebarFolded}
        setSidebarHidden={setSidebarHidden}
      />
    </Drawer>
  );
};

export default LayoutSidebar;
