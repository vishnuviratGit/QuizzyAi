import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "../../../store/features/common/selectors";
import { toggleSidebar } from "../../../store/features/common/commonSlice";
import {sidebarTopElements} from "./utils/SidebarTopElement"
import SidebarElement from "./SidebarElement"
import { ChevronLeft, ChevronRight } from "lucide-react";
import SidebarButton from "./SidebarButton"
const TeacherSideBar = () => {
  const { isSidebarOpen } = useSelector(commonSelector);
  const dispatch = useDispatch();
  const handleCollapse = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="h-full w-full flex flex-col">
      <div
        className={`${
          isSidebarOpen ? "p-4 pr-16" : "p-0"
        } h-16 w-full border-b`}
      >
        
        <img
          src={
            isSidebarOpen
              ? "/logo/quizzy_horizontal.png"
              : "/logo/quizzy_logo.png"
          }
          alt="Quizzy logo"
          className="max-w-full"
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2 p-2 border-b">
          {sidebarTopElements.map((element) => (
            <SidebarElement key={element.label} {...element} />
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex flex-col gap-2 p-2 border-t">
          <SidebarButton
            label={"Collapse"}
            icon={isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            onClick={handleCollapse}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherSideBar;
