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

function App() {

  return (
   <> 
   <Toaster />
      <Routes>
          <Route element={< AuthLayout/>}>
            <Route path="/signup" element={<Signup />} />
            <Route exact path="/" element={<SignIn />} />
          </Route>
      </Routes>
      <Routes>
        <Route element={<CoreLayout/>} >
          <Route path="/index" element={<Index/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Route>
      </Routes>
      <Routes>

      <Route path='admin' element={<AdLogin/>} />
      </Routes>
      
   </>
  )
}

export default App
