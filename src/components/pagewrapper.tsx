import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import { LayoutElement } from "@/types";
import classNames from "classnames";

const PageWrapper = ({ children}: LayoutElement) => {

    const { toggleCollapse } = useSideBarToggle();  

    const pageStyle = classNames("bg-slate-50 flex-grow p-2 text-black mt-16 ", {
    ["sm:pl-[5.8rem]"]: toggleCollapse,
    ["pl-[20.5rem]"]: !toggleCollapse
  })

  return (
    <div className={pageStyle} >
      {children}
    </div>
  )
}

export default PageWrapper