import React from 'react'
import TopBar from '../Components/TopBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-600 h-screen'>
      <TopBar/>
        <Outlet />
    </div>
  )
}

export default Main
