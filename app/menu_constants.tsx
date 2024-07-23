import { SideNavItemGroup } from "@/types/type";
import {
  BsEnvelope,
  BsGear,
  BsHouseDoor,
  BsKanban,
  BsListUl,
  BsQuestionCircle,
} from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: "Dashboards",
    menuList: [
      {
        title: "Dashboard",
        path: "/dashboard",
        protected: true,
        icon: <BsHouseDoor size={20} />,
      },
    ],
  },
  {
    title: "Manage",
    menuList: [
      {
        title: "Products",
        path: "/products",
        icon: <BsKanban size={20} />,
        submenu: true,
        subMenuItems: [
          { title: "All", path: "/products", protected: true },
          { title: "New", path: "/products/new", protected: true },
        ],
      },
      {
        title: "Orders",
        path: "/orders",
        protected: true,
        icon: <BsListUl size={20} />,
      },
      {
        title: "Feedbacks",
        path: "/feedbacks",
        protected: true,
        icon: <BsEnvelope size={20} />,
      },
    ],
  },
  {
    title: "Others",
    menuList: [
      {
        title: "Account",
        path: "/account",
        protected: true,
        icon: <BsGear size={20} />,
      },
      {
        title: "Help",
        path: "/help",
        protected: true,
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
