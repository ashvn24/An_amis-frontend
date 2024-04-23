import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from './User/Auth/Signup'
import AuthLayout from './User/Auth/AuthLayout';
import SignIn from './User/Auth/SignIn';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Routes>
          <Route element={< AuthLayout/>}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
      </Routes>
   </>
  )
}

export default App
