import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ----- Left Section */}
            <div>
                <img className='w-40 mb:5' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-5'>Medistry - Your trusted platform for booking doctor appointments with 100+ verified professionals. Get quality healthcare at your convenience with seamless online consultations and hassle-free scheduling. Your health, our priority!</p>
            </div>

            {/* ----- Middle Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>

            {/* ----- Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>0120-696969</li>
                    <li>medistry@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* ------ Copyright ------- */} 
        <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Medistry - All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
