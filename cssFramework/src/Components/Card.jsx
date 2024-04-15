import React from 'react'

const Card = () => {
  return (
    <div className='max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mx-auto my-5'>
        <div className="flex-shrink-0">
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='h-12 w-12' alt="" />
        </div>
        <div className='ml-6 pt-1'>
            <h4 className='text-xl text-gray-900 font-semibold'>
                Kalvium Store
            </h4>
            <p className='text-base text-gray-600'>
                You have a new course!
            </p>
        </div>
    </div>
  )
}

export default Card 