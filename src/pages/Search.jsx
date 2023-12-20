/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../compnents/Card'

const Search = () => {
    const {title} = useParams();
    const [searchMovie,setSearchMovie] = useState("")

    useEffect(()=>{
        getSeatchMovie()
    },[title])

    const getSeatchMovie = async () =>{
        const response = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=e2934ef9bfa20083336981253b8013fe&language=en-US&query=${title}&page=1&include_adult=false`)
        const data = await response.json();
        setSearchMovie(data.results);

    }
  return (
    <section className='px-10 my-10'>
      <h1 className='text-4xl text-gray-200 font-mono font-bold'>
        Search result for {`${title}`}
      </h1>
      <div className=" grid grid-cols-6 gap-3 mt-5">
        {
          searchMovie.length && searchMovie.map(movie=>{
            return(
              <Card key={movie.id} movie={movie} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Search
