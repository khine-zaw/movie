import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const HeaderCard = ({movie}) => {
  return (
    <div>
      <div className='relative h-screen'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className=' w-full object-cover h-full' />
        <div className="dark-ov"></div>
        <div className="text-box">
            <h1 className=' text-3xl font-bold mb-3'>{movie.title}</h1>
            <p className=' text-lg font-medium mb-2'>
               {movie.overview}
            </p>
            <button className=' bg-white px-3 py-2 rounded-md text-lg text-black font-medium flex items-center space-x-2'>
              <FaPlayCircle className=' w-5 h-5 text-red-500' />
              <p>Watch Now</p>
            </button>
        </div>
        </div>
    </div>
  )
}

export default HeaderCard
