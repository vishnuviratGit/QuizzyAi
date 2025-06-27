import React from "react";
import { useSelector } from "react-redux";
import { commonSelector } from "../../../store/features/common/selectors";
import TeacherSideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const TeacherLayout = () => {
  const { isSidebarOpen } = useSelector(commonSelector);

  return (
    <div className="h-screen w-screen flex">
      <aside
         className={`${
          isSidebarOpen ? "w-52" : "w-15"
        } h-full border-r transition-all`}

      > 
        <TeacherSideBar/>
      </aside>
      <main className="flex-1 overflow-auto">
          <Header/>
          <div className="p-2">
              <Outlet/>
          </div>
      </main>
    </div>
  );
};

export default TeacherLayout;
