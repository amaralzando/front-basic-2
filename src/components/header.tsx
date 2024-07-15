import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { Icon } from "@iconify/react";
import classNames from "classnames";

const Header = () => {

  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();  
  const sideBarToggle = () => {
    invokeToggleCollapse()
  }

  const headerStyle = classNames("fixed bg-bgnavs w-full z-0 px-4 shadow-sm shadow-slate-500/40", {
    ["sm:pl-[5.6rem]"]: toggleCollapse,
    ["sm:pl-[20rem]"]: !toggleCollapse
  })

  return (
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-16">
        <button onClick={sideBarToggle} className="order-2 sm:order-1 bg-actions text-bgText hover:bg-white ml-3 rounded-md h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
          <Icon icon='material-symbols:playlist-play' width={24} height={24}/>
        </button>
        <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-actions hover:bg-white flex items-center justify-center text-center transition duration-300 ease-in-out">
          <span className="font-semibold text-sm">
            GA
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header