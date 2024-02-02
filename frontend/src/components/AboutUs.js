import React from 'react'
import Navbar from './Navbar'
import Lykan from '../img/Lykan.webp'

const AboutUs = () => {
  return (
    <div className='w-full h-screen bg-cover bg-no-repeat' style = {{backgroundImage: `url(${Lykan})`}}>
    <div className='w-full h-screen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <Navbar />
      <div className='font-nunito text-white'>
        <div className='flex justify-center mt-12 font-medium text-3xl border-b-2 border-white w-1/4 mx-auto'>
          About Us
        </div>
        <div className='p-8 mt-12 h-4/5 w-5/6 mx-auto text-xl border border-white'>
          <p>Rarefind is a platform that provides you with information essestial to buy and sell rare classic and modern sports cars.<br></br>
          It provides obscure information about the cars along with an estimate of what those cars would be worth today to ensure you have all the information necessary to get the best price for your car.</p>
           {/* <br></br>
           <p>figure something out</p> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs