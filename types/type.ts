export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  protected?: boolean;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};
