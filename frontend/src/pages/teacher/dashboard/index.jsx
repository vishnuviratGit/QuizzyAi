import React from 'react'
import { useHeading } from '../../../hooks'

const TeacherDashboard = () => {
  const{setHeading, setSubheading} = useHeading();
  setHeading("dashboard")
  setSubheading("place for managing your assements")
  return (
    <div>
       dashboard
    </div>
  )
}

export default TeacherDashboard
