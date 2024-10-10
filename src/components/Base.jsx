import React from 'react'

const Base = () => {
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden p-7 w-full">
        <div className='flex justify-between mb-4'>
            <div className='capitalize font-semibold text-lg'>Base rate</div>
            <div className='bg-brown/5 rounded-lg border mr-3'>
                <p className='text-brown font-medium px-8 py-1.5'>₹ 10,000</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='capitalize font-semibold text-lg'>Approx time</div>
            <div className='bg-brown/5 rounded-lg border mr-3'>
                <p className='text-brown font-medium px-8 py-1.5'>12 DAYS</p>
            </div>
        </div>
    </div>
  )
}

export default Base