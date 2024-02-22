import { useLocation, useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";

import * as Icon from "react-icons/bi";

import type { SidebarItemProps } from "../../types/layout";

const SidebarItem = (props: SidebarItemProps) => {
  const {
    url,
    icon,
    title,
    isBelowLg,
    notification,
    sidebarFolded,
    setSidebarHidden,
  } = props;

  const MenuIcon = (Icon as any)[icon];

  const router = useLocation();
  const navigate = useNavigate();

  const isActive = Boolean(router.pathname === url);

  const handleMenuItemClick = () => {
    navigate(url);
    if (isBelowLg) {
      setSidebarHidden(true);
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{ pl: 0, ...(isActive ? { backgroundColor: "primary.dark" } : {}) }}
    >
      <ListItemButton
        disableRipple
        onClick={handleMenuItemClick}
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <ListItemAvatar sx={{ minWidth: 48, color: "common.white" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "primary.light",
            }}
          >
            {icon ? <MenuIcon size={20} /> : null}
          </Avatar>
        </ListItemAvatar>

        {!sidebarFolded ? (
          <>
            <ListItemText
              primary={title}
              primaryTypographyProps={{
                color: "common.white",
                sx: isActive ? { fontWeight: 700 } : {},
              }}
            />
            {notification ? (
              <Avatar
                sx={{
                  width: 26,
                  height: 26,
                  overflow: "visible",
                  backgroundColor: "primary.light",
                }}
              >
                <Badge
                  badgeContent={notification}
                  color="error"
                  sx={{
                    "& svg": {
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "common.black"
                          : "common.white",
                    },
                  }}
                >
                  <Icon.BiBell size={20} />
                </Badge>
              </Avatar>
            ) : null}
          </>
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
