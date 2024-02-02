import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Manufacturer from './Manufacturer'
import Navbar from './Navbar'
const URL = "http://192.168.119.221:5000/manufacturers"

const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data)
}

const Manufacturers = () => {
    const [manufacturers, setmanufacturers] = useState()

    useEffect(() => {
      fetchHandler().then(data => setmanufacturers(data.manufacturers))
    }, [])
    console.log(manufacturers);

  return (
    <div className=' '>
      <Navbar />
        <ul className='flex flex-col justify-center flex-wrap bg-stone-100'>
              {manufacturers && manufacturers.map((manufacturer, i) => (
                  <li key = {i}>
                      <Manufacturer manufacturer = {manufacturer}/>
                  </li>
              ))}
          </ul>
      </div>
        
  )
}

export default Manufacturers