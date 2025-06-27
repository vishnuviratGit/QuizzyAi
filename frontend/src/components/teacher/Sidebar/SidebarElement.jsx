import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { commonSelector } from '../../../store/features/common/selectors'

const SidebarElement = ({to, label, icon}) => {
    const {isSidebarOpen} = useSelector(commonSelector);
  return (
    <div>
       <NavLink
         to={to}
         className={({ isActive }) => (isActive ? "text-blue-500" : "")}
       >
          <div className='flex gap-2 items-center p-2 hover: bg-gray-100 rounded-md'>
             <span>{icon}</span>
             {isSidebarOpen && label}
          </div>
         </NavLink>
    </div>
  )
}

export default SidebarElement
