import React from 'react'
import Navbar from './Navbar'
import Alfa_Romeo from '../img/Alfa_Romeo.jpg'

const Home = () => {

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div className='w-full h-screen bg-no-repeat bg-cover scroll-smooth' style={{ backgroundImage: `url(${Alfa_Romeo})` }} >
            <div style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }} className='w-full h-full text-center text-black flex justify-center'>
              <div className=' mt-6 font-quicksand flex justify-around rounded-lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

              </div>
              <div className='text-blue-100 my-auto h-5/6 w-4/5 border-2 border-white '>
                <div className='hover:text-white'>
                  <div className='text-8xl mx-auto font-nunito font-bold italic mt-64 underline'>
                    Rarefind
                  </div>
                  <div className='font-nunito font-bold italic text-xl '>
                    Buy and sell rare sports cars for the right price
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home