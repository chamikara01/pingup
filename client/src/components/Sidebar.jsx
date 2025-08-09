import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {

  const navigate = useNavigate()  
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-o z-20 ${sidebarOpen ? 'translate-x-0' : `max-sm:-translate-x-full`} transition-all duration-300 ease-in-out`}>
        <div classname='w-full'>
            <img onClick={()=> navigate('/')} src={assets.logo} className='w-26 ml-7 my-2 cursor-pointer' alt=''/>
            <hr className='border-gray-300 mb-8'/>

            <MenuItems setSidebarOpen={setSidebarOpen}/>
        </div>
    </div>
  )
}

export default Sidebar