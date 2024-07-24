import { SideNavItemGroup } from "@/src/type";
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
    show: true,
    title: "Dashboards",
    menuList: [
      {
        show: true,
        title: "Dashboard",
        path: "/dashboard",
        protected: true,
        icon: <BsHouseDoor size={20} />,
      },
    ],
  },
  {
    show: true,
    title: "Manage",
    roles: ["ADMIN"],
    menuList: [
      {
        show: true,
        title: "Products",
        path: "/products",
        icon: <BsKanban size={20} />,
        submenu: true,
        subMenuItems: [
          { show: true, title: "All", path: "/products", protected: true },
          { show: true, title: "New", path: "/products/new", protected: true },
        ],
      },
      {
        show: true,
        title: "Orders",
        path: "/orders",
        protected: true,
        icon: <BsListUl size={20} />,
      },
      {
        show: true,
        title: "Feedbacks",
        path: "/feedbacks",
        protected: true,
        icon: <BsEnvelope size={20} />,
      },
    ],
  },
  {
    show: true,
    title: "Others",
    menuList: [
      {
        show: true,
        title: "Settings",
        path: "/settings",
        protected: true,
        icon: <BsGear size={20} />,
      },
      {
        show: true,
        title: "Help",
        path: "/help",
        protected: true,
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
