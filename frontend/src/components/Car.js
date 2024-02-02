import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Car = (props) => {
  const { _id, brand, model, price, newOrOld, year, image, time } = props.car
  const history = useNavigate()

  const deleteHandler = async() => {
    await axios.delete(`http://192.168.119.221:5000/cars/${_id}`)
    .then(res => res.data)
    .then(() => history('/'))
    .then(() => {
      history()
    })
  }

// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let Year = date.getFullYear();

// let hours = date.getHours();
// let minutes = date.getMinutes() + 1;
// let seconds = date.getSeconds();

// let currentDate = `${day}-${month}-${Year}`;
// let currentTime = `${hours}:${minutes}:${seconds}`;


  const navigate = useNavigate()
  return (
    <div className='flex flex-col w-5/6 h-full mx-auto'>
      <div className='my-12 mx-8 p-8 bg-white shadow-slate-800 shadow-lg flex justify-between items-center rounded-lg font-nunito'>
        <div className='w-2/3 flex justify-center'>
          <img src={image} alt={model} className='w-96 h-52'></img>
        </div>
        <div className='w-1/3 pl-4 mx-auto font-semibold'>
          <h1 className='text-xl underline'>Brand: {brand}</h1>
          <h3 className='text-xl underline'>Model: {model}</h3>
          <h2 className='text-lg'>Price: $ {price.toLocaleString()}</h2>
          {/* <h2 className='text-lg'>Date: {currentDate}</h2>
          <h2 className='text-lg'>Time: {currentTime}</h2> */}
          <div className='mx-auto'>
            <button className='bg-red-900 mx-2 px-2 py-1 rounded-full text-white hover:bg-slate-600' onClick={() => {navigate(`/cars/${_id}`)}}>Update</button>
            <button className='bg-red-900 mx-2 px-2 py-1 rounded-full text-white hover:bg-slate-600' onClick={deleteHandler}>Delete</button>
          </div>
          </div>
      </div>
    </div>
    
  )
}

export default Car