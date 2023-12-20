import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from '../compnents/Nav'
import Popular from '../pages/Popular';
import Upcoming from '../pages/Upcoming';
import Details from '../pages/Details';
import Search from '../pages/Search';

const Main = () => {
  return (
    <section>
      <Nav />
      <Routes>
        <Route index element={<Popular/>} />
        <Route element={<Upcoming/>} path='/upcoming' />
        <Route element={<Details/>} path='/details/:id' />
        <Route element={<Search/>} path='/search/:title'/>
      </Routes>
    </section>
  )
}

export default Main
