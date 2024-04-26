import React from 'react'

const BottomBar = () => {
  return (
    <div>
      <div className="text-gray-800 text-opacity-40 font-semibold text-xs tracking-widest px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-24">
          <div>
            <div className="text-gray-900 text-4xl font-display">An Amis</div>
          </div>
          <div>
            <div className="font-display text-gray-900 text-sm tracking-widest mb-6">More Info</div>
            <a href="#" className="block mb-4">Shop</a>
            <a href="#" className="block mb-4">About</a>
            <a href="#" className="block mb-4">Info</a>
            <a href="#" className="block mb-4">FAQ</a>
          </div>
          <div>
            <div className="font-display text-gray-900 text-sm tracking-widest mb-6">Helpful Links</div>
            <a href="#" className="block mb-4">Shop</a>
            <a href="#" className="block mb-4">About</a>
            <a href="#" className="block mb-4">Info</a>
            <a href="#" className="block mb-4">FAQ</a>
          </div>
          <div>
            <div className="font-display text-gray-900 text-sm tracking-widest mb-6">Find out more</div>
            <a href="#" className="block mb-4">Shop</a>
            <a href="#" className="block mb-4">About</a>
            <a href="#" className="block mb-4">Info</a>
            <a href="#" className="block mb-4">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
