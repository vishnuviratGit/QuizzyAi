import React from 'react'
import {useHeading} from "../../../hooks"
const Header = () => {
    const {heading, subheading} = useHeading()
  return (
    <nav className='h-16 top-0 sticky border-b p-2 flex flex-col justify-center'>
         <h1>{heading}</h1>
         {subheading && <p className='text-sm text-gray-500'>{subheading}</p>}
    </nav>
  )
}

export default Header
