import List from "@mui/material/List";

import SidebarItem from "./SidebarItem";

import navigation from "../../navigation";

import type { SidebarListProps, NavigationType } from "../../types/layout";

const SidebarList = (props: SidebarListProps) => {
  const recursiveSidebarItems = (arr: NavigationType[]) => {
    return arr.map((item, index) => {
      return <SidebarItem {...props} {...item} key={index} />;
    });
  };
  return (
    <List component="nav" disablePadding sx={{ py: 3 }}>
      {recursiveSidebarItems(navigation)}
    </List>
  );
};

export default SidebarList;
