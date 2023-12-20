import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';

const Header = () => {

  const [relatedMovies,setRelatedMovies] = useState([]);

  useEffect(()=>{
    getRelatedMovies();
  },[])

  const getRelatedMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e2934ef9bfa20083336981253b8013fe&language=en-US
    `)
    const data = await response.json();

    if (Array.isArray(data.results)) {
      setRelatedMovies(data.results);
    } else {
      console.error('Invalid data structure:', data);
    }
    //console.log(data.results);
  }

  return (
    <section className=' w-full'>
      <Splide options={{
        type: 'loop',
        autoplay: true,
        interval: 3000
      }}>
        {
          relatedMovies.map(movie=>{
            return(
              <SplideSlide key={movie.id}>
                <HeaderCard movie={movie}/>
              </SplideSlide>
            )
          })
        }
        
      </Splide>
    </section>
  )
}

export default Header
