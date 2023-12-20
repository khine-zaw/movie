import React, { useEffect, useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const [movie,setMovie] = useState({})
    const {id} = useParams();
    useEffect(()=>{
      getMovie()
    },[id])

    const getMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e2934ef9bfa20083336981253b8013fe&language=en-US`)
      const data = await response.json()
      setMovie(data);
    }
  return (
    <>
    {
      movie && (
        <section className='relative'>
          <div className="relative">
          <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='h-96 w-full' />
          <div className="dark-ov"></div>
         </div>

         <div className="detail-container">
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='w-52 rounded-md' />
          <div className=" ms-4 text-white">
            <h1 className='text-3xl font-semibold mb-2'>{movie.original_title}</h1>
            <p className='text-lg mb-2 my-2'><span className='text-red-500'>Runtime :</span> {movie.runtime} minutes</p>
            <p className='text-lg mb-2 my-2'><span className='text-red-500'>Release On :</span> {movie.release_date}</p>
            {
               movie.genres && movie.genres.map((g)=>{
                return(
                  <span key={g.id} className=' bg-red-500 px-2 py-1 rounded-lg me-2 font-bold mb-2'>{g.name}</span>
                )
              })
            }
            <h2 className='text-sm tracking-wider mt-3 mb-4'>{movie.overview}</h2>
            
            <Link to={movie.homepage} target='_blank' className='font-bold border-2 border-red-500 px-3 py-2 rounded-lg '>
              <FaPlayCircle className='w-6 h-6 text-red-500 inline-block me-2' />
              Watch Now
            </Link>
          </div>
         </div>
        </section>
        )
      }
    
    </>
    
  )
}

export default Details
