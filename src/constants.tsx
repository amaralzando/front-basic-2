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
    title: "Teste 1",
    path: "/teste1",
    icon: <Icon icon="lucide:home" width={24} height={24} />,
  },
  {
    show: true,
    title: "Teste 2",
    path: "/teste2",
    icon: <Icon icon="lucide:home" width={24} height={24} />,
  },
  {
    show: true,
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon icon="lucide:folder" width={24} height={24} />,
    subMenu: true,
    subMenuItems: [
      {show: true, title: "Dashboard", path: "/dashboard"},
      {show: true, title: "Teste", path: "/dashboard/teste"}
    ]
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