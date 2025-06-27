import React from 'react'
import { useHeading } from "../../../hooks";
const TeacherTemplatePage = () => {
   const { setHeading, setSubheading } = useHeading();
  setHeading("Templates");
  setSubheading("This is the place where you can manage your templates");
  return (
    <div>
       teacher templates page
    </div>
  )
}

export default TeacherTemplatePage


