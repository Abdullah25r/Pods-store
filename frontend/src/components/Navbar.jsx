import React from 'react'

function Navbar() {
  return (
    <header className='mt-3 flex justify-between'>
      <div className="m-2 flex ">
        <img src="logo.gif" alt="logo" className='h-7' />
        <div className="font-kanit font-medium text-lg ml-1 ">TimePods</div>
      </div>
      <div className="flex">
        <ul className='flex gap-12 mt-4'>
          <li><a href="" className='hover:text-gray-700 transition-colors font-bold'>Home</a></li>
          <li><a href="" className='hover:text-gray-700 transition-colors font-bold'>Products</a></li>
          <li><a href="" className='hover:text-gray-700 transition-colors font-bold'>Categories</a></li>
          <li><a href="" className='hover:text-gray-700 transition-colors font-bold'>Blog</a></li>
        </ul>
      </div>
      <div className="flex mx-3">
        <button className='px-4 mr-6 border border-gray-600 text-black rounded-md hover:bg-gray-800 hover:text-white transition'>sign in</button>
        <img src="clock.gif" className='h-8' alt="cart image" />
      </div>
    </header>
  )
}

export default Navbar