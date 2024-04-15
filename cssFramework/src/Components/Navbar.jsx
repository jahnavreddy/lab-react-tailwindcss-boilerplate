import React from 'react'

const Navbar = () => {
  return (
    <div className='border-t-8 border-blue-800'>
    <nav className="p-8  items-center flex justify-between bg-red-400 ">
      <div className="flex items-center text-white mr-7">
        <span className="font-bold text-xl">Kalvium</span>
      </div>

      <div className="flex flex-1 items-center justify-between">
                    <div className="flex text-sm   flex-wrap">
                        <a href="#" className="font-semibold mr-3 text-green-100">
                          About us
                        </a>
                        <a href="#" className="font-semibold mr-3 text-green-100">
                          Contacts
                        </a>
                        <a href="#" className="font-semibold  mr-3 text-green-100">
                          Courses
                        </a>
                    </div>
                    <div/>
        <div>
          <a href="#" className=" px-4 py-2  text-sm  border rounded text-white border-white " >
            Login</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar