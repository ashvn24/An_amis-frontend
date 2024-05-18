import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from './User/Auth/Signup'
import AuthLayout from './User/Auth/AuthLayout';
import SignIn from './User/Auth/SignIn';
import CoreLayout from './User/Core/CoreLayout';
import Index from './User/Core/Index';
import Book from './User/Core/Book';
import ContactUs from './User/Core/ContactUs';
import AdLogin from './Admin/Auth/AdLogin';
import { Toaster } from 'react-hot-toast';
import TopBar from './Admin/Components/TopBar';
import Main from './Admin/Index/main';
import Dashboard from './Admin/Index/Dashboard';

function App() {

  return (
   <> 
   <Toaster />
      <Routes>
          <Route element={< AuthLayout/>}>
            <Route path="/signup" element={<Signup />} />
            <Route  path="/signin" element={<SignIn />} />
          </Route>

        <Route element={<CoreLayout/>} >
          <Route exact path="/" element={<Index/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Route>

        <Route path='/admin' element={<AdLogin/>} />

        <Route element={<Main/>} >
        <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>

      
   </>
  )
}

export default App
