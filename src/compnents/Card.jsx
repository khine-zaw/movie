import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
  if (!movie) {
    return null; // or render some default content
  }
  return (
    <Link className='rounded-lg overflow-hiddend relative' to={`/details/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title}  />
      {/* <p>{movie.original_title}</p> */}
      <div className="dark-ov"></div>
      <FaPlayCircle className='play-icon' />
    </Link>
    
  )
}

export default Card
