import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Car from './Car'
import Navbar from './Navbar'
const URL = "http://192.168.119.221:5000/cars/oldcars"

const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data)
}

const Classic = () => {
    const [cars, setCars] = useState()

    useEffect(() => {
      fetchHandler().then(data => setCars(data.cars))
    }, [])
    console.log(cars);

  return (
    <div className=' '>
      <Navbar />
        <ul className='flex flex-col justify-center flex-wrap bg-stone-100'>
              {cars && cars.map((car, i) => (
                  <li key = {i}>
                      <Car car = {car}/>
                  </li>
              ))}
          </ul>
      </div>
        
  )
}

export default Classic