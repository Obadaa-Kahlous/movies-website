import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../component/navbar/navbar'
import { moviesType } from '../../store/getDataSlice'

import img from '../../assets/slider-bg.jpg'
import { Outlet } from 'react-router-dom'

const Feed = () => {


  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Feed