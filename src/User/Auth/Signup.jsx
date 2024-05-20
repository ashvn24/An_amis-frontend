import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Axios/AxiosInstance";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    var data = new FormData()
    const isValid = Object.values(formData).every(value=>value!=='');
    if (isValid) {
      if(formData.password!==formData.confirm){
        toast.error("password doesn't match")
      }else{
    
      const data = new FormData();
      data.append('email', formData.email);
      data.append('password', formData.password);

    
      toast.promise(
        axiosInstance.post('/user/reg/', data)
          .then((res) => {
            console.log(res.data);
            if (res.data){
              navigate('/signin');
            }
          })
          .catch((error) => {
            console.error('Login failed:', error);
            throw error; // Rethrow the error to trigger the error handling in toast.promise
          }),
        {
          loading: 'Signing in...', // Message shown while waiting for the response
          success: 'signup successful!', // Message shown on successful login
          error: 'signup failed', // Message shown on login failure
        }
      )
    }
    } else {
      toast.error('fill all fields')
    }

  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
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
        <div className="flex flex-row gap-3">
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
            </div>
            <input
              id="confirmpassword"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <Link to={"/signin"}>
            {" "}
            <p className="text-xs text-gray-500 uppercase">or sign in</p>
          </Link>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
