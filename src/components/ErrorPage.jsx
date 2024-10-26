import React from 'react'
import  errorImg from "../assets/error.webp"
const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] w-[100vw]'>
        <img src={errorImg} alt="error_img" className='w-100 h-[100%]'/>
    </div>
  )
}

export default ErrorPage