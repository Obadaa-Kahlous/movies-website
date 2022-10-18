import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../component/navbar/navbar'
import { moviesType } from '../../store/getDataSlice'

import img from '../../assets/slider-bg.jpg'
import { Outlet } from 'react-router-dom'
import popularMoviesSlice from '../../store/popularMoviesSlice'

const Feed = () => {
  const [value , setValue] = useState('popula')
  const dispatch = useDispatch()
  const hh = () => {
    dispatch(popularMoviesSlice(value))
  }

  return (
    <>
        <Navbar />
        <Outlet />
        <button onClick={hh}> Obada </button>
        <style>
          {`
            body{
              height : 1800px
            }
          `}
        </style>
    </>
  )
}

export default Feed