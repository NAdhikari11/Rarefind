import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Veneno from '../img/Veneno.webp'

const CarDetails = () => {
  const id = useParams().id
  const [checked, setChecked] = useState(false)
  const [inputs, setInputs] = useState({})
  const history = useNavigate()

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://192.168.119.221:5000/cars/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.car));
    }
    fetchHandler()
  }, [id])

  const sendRequest = async () => {
    await axios.put(`http://192.168.119.221:5000/cars/${id}`, {
      brand: String(inputs.brand),
      model: String(inputs.model),
      price: Number(inputs.price),
      image: String(inputs.image),
      newOrOld: Boolean(checked),
    })
      .then(res => res.data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest().then(() => history('/'))
  }

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className='w-full h-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Veneno})` }}>
      <div className='w-full h-screen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className='flex justify-center text-3xl pt-12 font-nunito font-semibold text-white border-b-2 border-white w-1/4 mx-auto'>
          Update Information
        </div>
        {inputs && (<div className='pt-24'>
          <div className='bg-stone-300 h-1/2 w-1/2 mx-auto flex justify-center rounded-lg py-16 font-nunito'>
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
              <div className='py-2'>
                <button type='submit' className='bg-red-900 mx-2 px-2 py-1 rounded-full text-white hover:bg-slate-600'>Update</button>
              </div>
            </form>
          </div>
        </div>)}
      </div>


    </div>
  )
}

export default CarDetails