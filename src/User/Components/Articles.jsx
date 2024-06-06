import React from 'react'
import yel from '../../assets/product/yel.jpg'
import prod from '../../assets/product/prods.jpg'
import port from '../../assets/product/port.jpg'
import bot from '../../assets/product/prod.jpeg'

const Articles = () => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-screen">
        <div className="h-64 md:h-auto md:col-span-2 md:row-span-2 relative">
          <img src={bot} className="absolute inset-0 w-full h-full object-cover" alt="Cleansers" />
        </div>
        <div className="text-gray-700 text-center md:col-span-2 flex items-center justify-center">
          <div className="relative z-10 p-12">
            <div className="uppercase text-sm text-gray-700 tracking-widest">Only the best</div>
            <h3 className="font-display font-semibold text-3xl mt-2">Products</h3>
            <p className="mt-3 mx-auto max-w-md">AnAmis curates mindfully-sourced, high-performance products for an indulgent, eco-conscious beauty experience.</p>
          </div>
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <img src={yel} className="absolute inset-0 w-full h-full object-cover" alt="Product" />
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <img src={prod} className="absolute inset-0 w-full h-full object-cover" alt="Product" />
        </div>
      </div>
    </div>
  )
}

export default Articles
