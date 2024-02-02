import React from 'react'

const Manufacturer = (props) => {
    const { _id, address, carNumber, models, contact } = props.manufacturer

    return (
        <div className='flex flex-col w-5/6 h-full mx-auto'>
            <div className='my-12 mx-8 p-24 bg-white shadow-slate-800 shadow-lg flex justify-between items-center rounded-lg font-nunito'>
                <div className='w-1/2 pl-4 mx-auto font-semibold'>
                    <h1 className='text-2xl underline'>Address: {address}</h1>
                    <h2 className='text-xl'>Number of cars available: {carNumber}</h2>
                    <h3 className='text-2xl underline'>Model: {models}</h3>
                    <h2 className='text-md'>Contact: {contact}</h2>
                </div>
            </div>
        </div>
    )
}

export default Manufacturer