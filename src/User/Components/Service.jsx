import React from 'react'

const Service = () => {
  return (
    <div id="service-section">
      

      <div className="p-4 grid grid-cols-1 md:grid-cols-5 grid-rows-2 gap-4 md:h-screen">
        <a
          href="#"
          className="relative block bg-black text-white md:col-span-2"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Bridal Service</h3>
            <p className="text-sm mt-2">
            Transforming brides into timeless beauties on their special day.
            </p>
            
          </div>
          <img
            src="https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Best Sellers"
          />
        </a>
        <a
          href="#"
          className="relative block bg-black text-white md:col-span-3 lg:col-span-1"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Facials</h3>
            <p className="text-sm mt-2">
            Radiant skin, timeless beauty.
            </p>
            
          </div>
          <img
            src="https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Limited"
          />
        </a>
        <a
          href="#"
          className="relative block bg-black text-white md:col-span-3 lg:col-span-2 lg:row-span-2"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Hairstyling</h3>
            <p className="text-sm mt-2">
            Elevate your look with stunning hairstyling expertise.
            </p>
            
          </div>
          <img
            src="https://images.unsplash.com/photo-1527633412983-d80af308e660?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="New In"
          />
        </a>
        <a
          href="#"
          className="relative block bg-black text-white md:col-span-2 lg:col-span-1"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Spa Service</h3>
            <p className="text-sm mt-2">
            Indulge in rejuvenating spa experiences, tailored just for you.
            </p>
            
          </div>
          <img
            src="https://images.unsplash.com/photo-1533017568856-f6085fef5f1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Sale"
          />
        </a>
        <a
          href="#"
          className="relative block bg-black text-white md:col-span-5 lg:col-span-2"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Keratin Treatment</h3>
            <p className="text-sm mt-2">
            Smooth, sleek, sensational: unlock the secret to flawless hair with our keratin treatments.
            </p>
            
          </div>
          <img
            src="https://images.unsplash.com/photo-1603001790877-2733c25430d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Half Price"
          />
        </a>
      </div>
    </div>
  )
}

export default Service
