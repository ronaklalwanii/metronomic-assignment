export type NavbarProps = {
  isBelowLg: boolean;
  sidebarHidden: boolean;
  sidebarFolded: boolean;
  setSidebarFolded: (val: boolean) => void;
  setSidebarHidden: (val: boolean) => void;
};

export type SidebarProps = {
  isBelowLg: boolean;
  sidebarHidden: boolean;
  sidebarFolded: boolean;
  setSidebarHidden: (val: boolean) => void;
};

export type SidebarListProps = {
  isBelowLg: boolean;
  sidebarFolded: boolean;
  setSidebarHidden: (val: boolean) => void;
};

export type SidebarItemProps = {
  url: string;
  icon: string;
  title: string;
  isBelowLg: boolean;
  notification?: number;
  sidebarFolded: boolean;
  setSidebarHidden: (val: boolean) => void;
};

export type NavigationType = {
  url: string;
  icon: string;
  title: string;
  notification?: number;
};
