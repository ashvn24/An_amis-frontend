import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
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
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          
        </div>
        <input
          id="confirmpassword"
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
        />
      </div>
      </div>
      <div className="mt-8">
        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Login
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to={"/"}> <a href="#" className="text-xs text-gray-500 uppercase">or sign in</a></Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
    </div>
  );
};

export default Signup;
