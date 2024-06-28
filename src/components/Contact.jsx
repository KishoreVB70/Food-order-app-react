import React from 'react'

function Contact() {
  return (
    <div className='border border-gray-500 flex flex-col justify-center items-center p-2 w-6/12 my-4 mx-auto' >
      <h1>Swiggy@gmail.com</h1>
      <input  className='border m-1 p-1 text-center border-gray-500 ' type="text" placeholder='name' />
      <input  className='border m-1 p-1 text-center border-gray-500 ' type="text" placeholder='contact' />
      <input  className='border m-1 p-1 text-center border-gray-500 ' type="text" placeholder='issue' />
      <button className='m-2 p-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-100 hover:text-blue-700' >Submit</button>
    </div>
  )
}

export default Contact