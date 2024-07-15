'use client'

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { MenuItemWithSubMenuProps } from "@/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SidebarMenuItem = ({ item }: MenuItemWithSubMenuProps) => {
  const linkStyle = "flex items-center min-h-[40px] h-full text-bgText rounded-md py-2 px-4 hover:text-white transition duration-300 easy-in-out";
  const activeLinkStyle = "text-white bg-actions"
  const ddLinkStyle = linkStyle;
  const navMenuDropdownItem = 'text-bgText py-2 px-4 hover:text-white transition duration-300 easy-in-out'
  
    const { toggleCollapse } = useSideBarToggle();  
  const pathName = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen)
  }

  return (
    <>
      {
        item.subMenu ? (
          <div className="rounded-md min-w-[18px]">
            <a className={`${ddLinkStyle} ${pathName.includes(item.path) ? activeLinkStyle : ''}`} onClick={toggleSubMenu}>
              {item.icon}
              {
                !toggleCollapse && 
                <>
                  <span className="ml-3 leading-0 font-semibold">{item.title}</span>
                  <Icon className={`${subMenuOpen ? "rotate-90" : ""} ml-auto stroke-2 text-xs`} 
                    icon="material-symbols:chevron-right" width={24} height={24}/>
                </>
              }
            </a>
           { subMenuOpen &&
             <div className="bg-actions border-l-4">
                <div className="grid gap-y-2 px-10 py-3 leading-5">
                  {
                    item.subMenuItems?.map((subItem, index) => {
                    return (
                      <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path === pathName ? activeLinkStyle : ''}`} >
                        <span>{subItem.title}</span>
                      </Link>
                    )
                  })
                  }
              </div>
            </div>
           }
          </div>
        ) : (
          <Link href={item.path} className={`${ddLinkStyle} ${item.path === pathName ? activeLinkStyle : ''}`}>
            {item.icon}
            {
              !toggleCollapse && <span className="ml-3 leading-0 font-semibold">{item.title}</span>
            }
          </Link>
        )
      }
    </>
  )
}

export default SidebarMenuItem