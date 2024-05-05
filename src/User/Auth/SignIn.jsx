import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASEURL } from '../../Axios/BaseUrl'
import { axiosInstance } from '../../Axios/AxiosInstance'
import toast from 'react-hot-toast'

const SignIn = () => {

  const [load, setLoad] = useState(false)
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()

  const handleChange = (e) =>{
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    var data = new FormData()
    const isValid = Object.values(formData).every(value=>value!=='');
    if (isValid) {
      setLoad(true);
    
      const data = new FormData();
      data.append('email', formData.email);
      data.append('password', formData.password);
    
      toast.promise(
        axiosInstance.post('/user/log/', data)
          .then((res) => {
            console.log(res.data);
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            navigate('/');
          })
          .catch((error) => {
            console.error('Login failed:', error);
            throw error; // Rethrow the error to trigger the error handling in toast.promise
          }),
        {
          loading: 'Logging in...', // Message shown while waiting for the response
          success: 'Login successful!', // Message shown on successful login
          error: 'Login failed', // Message shown on login failure
        }
      ).finally(() => {
        setLoad(false);
      });
    } else {
      toast.error('fill all fields')
    }

  }
  

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <p href="#" className="text-xs text-gray-500">
            Forget Password?
          </p>
        </div>
        <input
          id="password"
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          
        />
      </div>
      <div className="mt-8">
        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          { !load? 'Login':'Logging in..' }
        </button>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to={'/signup'}><p  className="text-xs text-gray-500 uppercase">or sign up</p></Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                    </form>
    </div>
  )
}

export default SignIn
