import React from 'react'
import spa from '../../assets/service/spa.avif'
import bridal from '../../assets/service/bridal.avif'
import facial from '../../assets/service/facial.avif'
import hair from '../../assets/service/hair.avif'
import keratin from '../../assets/service/keratin.avif'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div id="service-section">
      

      <div className="p-4 grid grid-cols-1 md:grid-cols-5 grid-rows-2 gap-4 md:h-screen">
        <p
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
            src={bridal}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Best Sellers"
          />
        </p>
        <p
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
            src={facial}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Limited"
          />
        </p>
        <p
          href="#"
          className="relative block bg-black text-white md:col-span-3 lg:col-span-2 lg:row-span-2"
        >
          <div className="relative z-10 p-12">
            <h3 className="font-display text-2xl">Hairstyling</h3>
            <p className="text-sm mt-2">
            Elevate your look with stunning hairstyling expertise.
            </p><div className='flex justify-center items-center h-screen'>

            <Link to={'/service'}><button className='p-4 bg-white text-black rounded-lg font-semibold mt-10 '>
              view more
            </button></Link>
            </div>
          </div>
          <img
            src={hair}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="New In"
          />
        </p>
        <p
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
            src={spa}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Sale"
          />
        </p>
        <p
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
            src={keratin}
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Half Price"
          />
        </p>
      </div>
    </div>
  )
}

export default Service
