import React from 'react'

const Articles = () => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-screen">
        <div className="h-64 md:h-auto md:col-span-2 md:row-span-2 relative">
          <img src="https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Cleansers" />
        </div>
        <div className="text-gray-700 text-center md:col-span-2 flex items-center justify-center">
          <div className="relative z-10 p-12">
            <div className="uppercase text-sm text-gray-700 tracking-widest">Only the best</div>
            <h3 className="font-display font-semibold text-3xl mt-2">Cleansers</h3>
            <p className="mt-3 mx-auto max-w-md">We're humans too and we understand that skin care and cosmetics should rejuvenate and rehydrate in the short and long run.</p>
          </div>
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Product" />
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <img src="https://images.unsplash.com/photo-1585652757146-e9d00bf2810c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Product" />
        </div>
      </div>
    </div>
  )
}

export default Articles
