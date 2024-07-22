import { SIDENAV_ITEMS } from "@/constants"
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle"
import classNames from "classnames"
import Image from "next/image"
import SidebarMenuItem from "./sidebar-menu-item"

const Sidebar = () => {

  const { toggleCollapse } = useSideBarToggle();  

  const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-bgnavs text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out ", {
    ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
    ["w-[20rem]"]: !toggleCollapse
  })

  return (
    <aside className={asideStyle}>
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          className="w-12 mx-3.5 min-h-fit" 
          src='/logo.png' alt='' width={30} height={30} />
          {
            !toggleCollapse &&
              <h3 className="pl-2 font-bold text-2xl text-white min-w-max">
                GASA Dashboard
              </h3>
          }
      </div>
      <nav className="flex flex-col gap-2 transition duration-300 ">
        <div className="flex flex-col gap-2 px-4">
          {
            SIDENAV_ITEMS.map((item, index) => {
              return <SidebarMenuItem key={index} item={item}/>
            })
          }
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar