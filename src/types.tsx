import { ReactNode } from "react";

export interface IconsType{
    size?: number,
    color?: string
}

export interface LayoutElement {
    children: ReactNode;
}

export type SideNavItem = {
    show: boolean;
    title: string;
    path: string;
    icon?: JSX.Element;
    subMenu?: boolean;
    subMenuItems?: SideNavItem[]
}

export type MenuItemWithSubMenuProps ={
    item: SideNavItem;
}