import React from 'react'
import Header from '../compnents/Header'
import CardContainer from '../compnents/CardContainer'

const Upcoming = () => {
  return (
    <div>
      <Header />
      <CardContainer title={"Upcoming Movie"} url={`https://api.themoviedb.org/3/movie/upcoming?api_key=e2934ef9bfa20083336981253b8013fe&language=en-US`}/>
    </div>
  )
}

export default Upcoming
