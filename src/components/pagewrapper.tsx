import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { LayoutElement } from "@/types";
import classNames from "classnames";

const PageWrapper = ({ children}: LayoutElement) => {

    const { toggleCollapse } = useSideBarToggle();  

    const pageStyle = classNames("bg-slate-50 flex-grow text-black p-2 mt-16 ", {
    ["sm:pl-[5.6rem]"]: toggleCollapse,
    ["pl-[20rem]"]: !toggleCollapse
  })

  return (
    <div className={pageStyle} >
      {children}
    </div>
  )
}

export default PageWrapper