import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10'>
        
        {/* LEFT SIDE */}
        <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left'>
            <p className='text-3xl md:text-5xl text-white font-bold leading-snug animate-fade-in'>
                Book Appointment <br /> with Trusted Doctors
            </p>

            <div className='flex items-center gap-3'>
                <img className='w-20 rounded-full border-2 border-white' src={assets.group_profiles} alt="" />
                <p className="text-white text-md">
                    Browse through our trusted doctors, <br className='hidden sm:block' />
                    and book hassle-free.
                </p>
            </div>

            <a href="#speciality" className='bg-white text-primary text-sm px-8 py-3 rounded-full font-semibold m-auto md:m-0 flex items-center gap-2 hover:scale-105 transition-all duration-300'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
            </a>
        </div>

        {/* RIGHT SIDE */}
        <div className='md:w-1/2 flex justify-center relative'>
            <img className='w-full max-w-md md:max-w-lg object-cover rounded-lg transition-all hover:scale-105 shadow-lg' src={assets.header_img} alt="Doctors" />
        </div>

    </div>

  );
}

export default Header
