import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { doctor } = useParams()   // it is doctor id 
  // get doctor's data from the context
  const {doctors, currencySymbol} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  // finding a particular data from doctors array using docId
  const fetchDocInfo = async () => {
    // const docInfo = doctors.find(doc => doc._id === docId)
    const docInfo = doctors.find(doc => String(doc._id) === String(doctor))
    setDocInfo(docInfo)
    console.log(docInfo);
  }

  // run the above function whenever the page loads
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, doctor])

  return docInfo && (
    <div>
      {/* ------- Doctor details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo?.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ---------- doctor info like name, degree, exp. */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* ------- doctor about -------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About
              <img src={assets.info_icon} alt="" />
            </p>

            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
              {docInfo.about}
            </p>
          </div>
          {/* appointment fee */}
          <p className='text-gray-500 mt-4 font-medium'>
            Appointment fee: 
            <span className='text-gray-600 '>{currencySymbol}{docInfo.fees}</span>
          </p>
          
        </div>
      </div>

    </div>
  )
}

export default Appointment
