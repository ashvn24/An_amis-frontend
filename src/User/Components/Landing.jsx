import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const [current, setCurrent] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAbout =() => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    
  }
  return (
    <div>
      <div className="-mt-32 relative w-full h-screen bg-blue-100 flex items-center justify-center">
        <div className="relative z-10 text-white text-center px-6">
          <div className="text-xs uppercase tracking-widest">
            Clean and affordable beauty
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-semibold mt-2">
            Where style meets shears
          </h1>
          <p className="mt-4">Your journey to style starts here.</p>
          <div className="max-w-sm mx-auto grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link to={'/book'}>           <a
              href="#"
              className="inline-block bg-blue-300 text-white text-md tracking-widest font-heading px-8 py-4"
            >
              Book now
            </a>
            </Link>
 
            <a
              onClick={handleAbout}
              className="inline-block bg-gray-100 text-gray-700 text-md tracking-widest font-heading px-8 py-4 cursor-pointer"
            >
              Learn more
            </a>
          </div>
        </div>
        <img
          src={images[current]}
          className="w-full h-full absolute inset-0 object-cover opacity-95"
          alt="slideshow"
        />
      </div>
    </div>
  )
}

export default Landing