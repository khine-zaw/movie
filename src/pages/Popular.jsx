import React from 'react'
import Header from '../compnents/Header'
import CardContainer from '../compnents/CardContainer'

const Popular = () => {
  return (
    <div>
      <Header />
      <CardContainer title={"Popular Now"} url={`https://api.themoviedb.org/3/movie/popular?api_key=e2934ef9bfa20083336981253b8013fe&language=en-US`}/>
    </div>
  )
}

export default Popular
