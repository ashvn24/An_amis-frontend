import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const CoreLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const accessToken = localStorage.getItem("access");
  return (
    <div>
      <div className="h-8 z-10 relative bg-blue-100 text-blue-900 text-xs text-center tracking-wider flex items-center justify-center px-6">
        open mon - sat
      </div>
      <div className="h-24 z-40 relative container mx-auto px-6 flex items-center justify-between text-white">
        <div>
          <a href="/" className=" font-normal text-xl">
            An Amis
          </a>
        </div>
        <div className="flex items-center justify-center font-normal relative z-10">
          <button className="md:hidden" onClick={() => setShowMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden md:flex items-center justify-center">
            <a href="/about" className="mx-6">
              About
            </a>
            <a href="/products" className="mx-6">
              Service
            </a>
            <a href="/blog" className="mx-6">
              Articles
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <a href="#" className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
            {accessToken ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            ) : (
              ""
            )}
        </div>
        {showMenu && (
          <div className="fixed inset-0 w-screen h-screen md:hidden flex flex-col items-center justify-center text-2xl space-y-4 bg-blue-100 text-white z-40">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-0 right-0 mt-12 mr-12 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a href="/about" className="mx-6">
              About
            </a>
            <a href="/products" className="mx-6">
              Service
            </a>
            <a href="/blog" className="mx-6">
              Articles
            </a>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default CoreLayout;
