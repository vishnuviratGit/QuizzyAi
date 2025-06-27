import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/common/Loading";
import CreateTemplatePage from "./pages/teacher/templates/create";


const Home = lazy(() => import("./pages/index"));
const TeacherDashboard = lazy(()=>import("./pages/teacher/dashboard"))
const TeacherTemplatePage = lazy(()=>import("./pages/teacher/templates"))
const TeacherLayout = lazy(()=>import("./components/teacher/Layout"))
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<TeacherLayout/>}> 
               <Route path="/teacher/templates" element={<TeacherTemplatePage/>} />
              <Route path="/teacher/dashboard" element={<TeacherDashboard/>}/>
               <Route path="/teacher/templates/create" element={<CreateTemplatePage/>}/>
          </Route>
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
