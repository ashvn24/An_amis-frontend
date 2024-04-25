import React from 'react'
import { Outlet } from 'react-router-dom'
import auth from '../../assets/cvr.jpg'
import bg from '../../assets/bg.jpg'


const AuthLayout = () => {
  return (
    <div>
      <div className="py-16 h-screen" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl h-full ">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: `url(${auth})`}}></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">An Amis</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <Outlet />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthLayout
