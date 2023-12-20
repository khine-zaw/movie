import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [searchKey,setSearchKey] = useState("");
  const navigate = useNavigate()

  const searchMovie = (e) => {
    e.preventDefault();
    // console.log(searchKey);
    navigate(`/search/${searchKey}`)
  }

  return (
    <nav className='flex items-center justify-between bg-black text-white px-10 py-5 sticky top-0 backdrop-blur-lg z-10'>
      <NavLink to={'/'}>
        <h1 className='text-3xl font-mon font-bold'>Movie App</h1>
      </NavLink>
      <div className='flex items-center space-x-3'>

        <NavLink className={({isActive})=>
          isActive ? "active-text" : "non-active-text"
        } to={'/'}>Popular</NavLink>

        <NavLink className={({isActive})=>
          isActive ? "active-text" : "non-active-text"
        } to={'/upcoming'}>Upcoming</NavLink>
        
      </div>
      <form className='flex items-center justify-center' onSubmit={searchMovie}>
        <input type="text" className='text-xl bg-transparent border-b-2 focus:outline-none'
        onChange={(e) => setSearchKey(e.target.value)} />
        <button type='submit'>
          <FaMagnifyingGlass className='w-6 h-6' />
        </button>
      </form>
    </nav>
  )
}

export default Nav
