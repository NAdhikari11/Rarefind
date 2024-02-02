import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Veneno from '../img/Veneno.webp'

const AddCar = () => {

  const history = useNavigate()
  const [inputs, setInputs] = useState({
    brand: "",
    model: "",
    price: "",
    image: ""
  })

  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const sendRequest = async () => {
    await axios.post("http://192.168.119.221:5000/cars", {
      brand: String(inputs.brand),
      model: String(inputs.model),
      price: Number(inputs.price),
      image: String(inputs.image),
      // newOrOld: Boolean(checked)
      year: Number(inputs.year)
    }).then(res => res.data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/'))
  }

  return (
    <div className='w-full h-screen bg-cover bg-no-repeat' style = {{backgroundImage: `url(${Veneno})`}}>
    <div className='w-full h-screen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <Navbar />
      <div className='font-semibold'>
        <div className='flex justify-center mt-12 text-3xl font-nunito font-semibold text-white border-b-2 border-white w-1/4 mx-auto'>
          Add a New Car
        </div>
        <div className='pt-8'>
          <div className='bg-stone-300 h-1/2 w-1/2 mx-auto flex justify-center rounded-lg py-16 font-nunito shadow-slate-800 shadow-lg'>
            <form onSubmit={handleSubmit}>
              <div className='py-2'>
                <label className='px-2'>Brand</label>
                <input value={inputs.brand} onChange={handleChange} id='brand' name='brand' type='text' placeholder='Brand' className='rounded-md px-2' />
              </div>
              <div className='py-2'>
                <label className='px-2'>Model</label>
                <input value={inputs.model} onChange={handleChange} id='model' name='model' type='text' placeholder='Model' className='rounded-md px-2' />
              </div>
              <div className='py-2'>
                <label className='px-2'>Price</label>
                <input value={inputs.price} onChange={handleChange} id='price' name='price' type='number' placeholder='Price' className='rounded-md px-2' />
              </div>
              <div className='py-2'>
                <label className='px-2'>Image</label>
                <input value={inputs.image} onChange={handleChange} id='Image' name='image' type='text' placeholder='Image' className='rounded-md px-2' />
              </div>
              <div className='py-2'>
              <label className='px-2'>Year</label>
              <input value={inputs.year} onChange={handleChange} id='year' name='year' type='number' placeholder='year' className='rounded-md px-2' />
            </div>
              <div className='py-2'>
                <label className='pr-4'>New</label>
                <input value={checked} onChange={() => setChecked(!checked)} type='checkbox' name='newOrOld' />
              </div>
              <div className='py-2 flex justify-center'>
                <button type='submit' className='bg-red-900 mx-2 px-2 py-1 rounded-full text-white hover:bg-slate-600'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
      



  )
}

export default AddCar