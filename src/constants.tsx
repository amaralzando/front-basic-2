import { Icon } from '@iconify/react';
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    show: true,
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width={24} height={24} />,
  },
  {
    show: true,
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon icon="lucide:folder" width={24} height={24} />,
    subMenu: false,
  },
  {
    show: true,
    title: "Configuração",
    path: "/configuracao",
    icon: <Icon icon="lucide:settings" width={24} height={24} />,
    subMenu: true,
    subMenuItems: [
      {show: true, title: "Configuração", path: "/configuracao"},
      {show: true, title: "Usuários", path: "/configuracao/usuarios"},
    ]
  }
]