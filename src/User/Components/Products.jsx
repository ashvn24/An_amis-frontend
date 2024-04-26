import React from 'react'

const Products = () => {
  return (
    <div id="about-section">
        <div className="container mx-auto px-6 flex flex-wrap items-center py-24">
        <div className="w-full lg:flex-1">
          <div className="uppercase text-sm text-gray-700 tracking-widest">
            Why An Amis?
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-display mt-3">
            Natural and organic is the future of skincare and life as we know
            it.
          </h2>
        </div>
        <div className="w-full lg:w-auto text-center">
          <svg
            className="inline-block w-32 h-32 -mb-10 -mt-4 lg:mt-0 lg:mb-0 lg:transform lg:rotate-90 lg:-ml-8"
            viewBox="0 0 100 125"
          >
            <path d="M91.8 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7C70 47.3 68 45 64 45c-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-3.9 0-5.9 2.3-7.7 4.3-1.7 2-3.2 3.7-6.2 3.7s-4.5-1.7-6.2-3.7c-1.8-2-3.8-4.3-7.7-4.3-.6 0-1 .4-1 1s.4 1 1 1c3 0 4.5 1.7 6.2 3.7 1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7s4.5 1.7 6.2 3.7c1.8 2 3.8 4.3 7.7 4.3 3.9 0 5.9-2.3 7.7-4.3 1.7-2 3.2-3.7 6.2-3.7.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
        </div>
        <div className="w-full lg:flex-1">
          <p>
            Let's face it. Many cosmetics are bad for your skin. We use only
            natural ingredients and still provide consistently great tanning
            results.
          </p>
          
        </div>
      </div>
      <div>
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-screen">
          <div className="text-gray-700 text-center md:col-span-2 flex items-center justify-center">
            <div className="relative z-10 p-12">
              <div className="uppercase text-sm text-gray-700 tracking-widest">
                Limited Run
              </div>
              <h3 className="font-display font-semibold text-3xl mt-2">
                Moisturise
              </h3>
              <p className="mt-3 mx-auto max-w-md">
                Whether in the sun or on the couch, hydration is key to
                maintaining happy, healthy skin.
              </p>
              
            </div>
          </div>
          <div className="h-64 md:h-auto md:col-span-2 md:row-span-2 relative">
            <img
              src="https://images.unsplash.com/photo-1597931752949-98c74b5b159f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Moisturise"
            />
          </div>
          <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
            <img
              src="https://images.unsplash.com/photo-1607602175460-c5dff74d7909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Product"
            />
          </div>
          <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
            <img
              src="https://images.unsplash.com/photo-1598282780498-8eda08ec1941?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Product"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
