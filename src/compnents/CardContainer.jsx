import React, { useEffect, useState } from 'react'
import Card from './Card'

const CardContainer = ({title,url}) => {
    const [popularMovies,setPopularMovies] = useState([]);

  useEffect(()=>{
    getPopularMovies();
  },[])

  const getPopularMovies = async () => {
    const response = await fetch(url)
    const data = await response.json();

    //setPopularMovies(data.results);
    if (Array.isArray(data.results)) {
        setPopularMovies(data.results);
    } else {
      console.error('Invalid data structure:', data);
    }
    //console.log(data.results);
  }

  return (
    <section className='px-10 my-10'>
      <h1 className='text-4xl text-gray-200 font-mono font-bold'>{title}</h1>
      <div className=" grid grid-cols-6 gap-3 mt-5">
        {
            popularMovies.length && popularMovies.map(mv=>{
                return(
                  <Card movie={mv} key={mv.id} />
                )
            },[])
        }
      </div>
    </section>
  )
}

export default CardContainer
