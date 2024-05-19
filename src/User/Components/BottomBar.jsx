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
            <div className="font-display text-gray-900 text-sm tracking-widest mb-6">Contct us</div>
            <a href="#" className="block mb-4">Address: Old Rd, opp. Baby Hyper Market, junction, Kuthuparamba, Kerara 670643</a>
            <a href="#" className="block mb-4">Phone: +91 9846560589</a>
            <a href="#" className="block mb-4">email: anamissalon@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
