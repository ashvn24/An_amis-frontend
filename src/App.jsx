import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from './User/Auth/Signup'
import AuthLayout from './User/Auth/AuthLayout';
import SignIn from './User/Auth/SignIn';
import CoreLayout from './User/Core/CoreLayout';
import Index from './User/Core/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
   <> 
      <Routes>
          <Route element={< AuthLayout/>}>
            <Route path="/signup" element={<Signup />} />
            <Route exact path="/" element={<SignIn />} />
          </Route>
      </Routes>
      <Routes>
        <Route element={<CoreLayout/>} >
          <Route path="/index" element={<Index/>} />
        </Route>
      </Routes>
      
   </>
  )
}

export default App
