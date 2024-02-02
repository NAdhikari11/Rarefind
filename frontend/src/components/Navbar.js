import React from 'react'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { useState } from 'react';

const Navbar = () => {
    const [value, setvalue] = useState()

  return (
    <div>
        <div className='flex w-full h-14 justify-between font-quicksand font-semibold bg-red-900 font-nunito'>
      <div className='flex ml-5 w-1/2'>
        <div className='flex w-auto items-center justify-center text-gray-300'>
          <a href='/'><DriveEtaIcon /></a>
        </div> 
       </div>
       <div className='flex mr-5'>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-slate-400 text-white font-semibold hover:underline'>
          <a href='add'>Add New Car</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:duration-300 hover:bg-cold hover:text-slate-400 text-white font-semibold hover:underline'>
          <a href='newcars'>Modern</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-slate-400 text-white font-semibold hover:underline'>
          <a href='oldcars'>Classic</a>
        </div>
        <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-slate-400 text-white font-semibold hover:underline'>
          <a href='about'>About Us</a>
        </div>
        {/* <div className='flex w-25 items-center justify-center mr-3 hover:bg-cold hover:duration-300 hover:text-slate-400 text-white font-semibold hover:underline'>
          <a href='manufacturers'>Manufacturers</a>
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default Navbar