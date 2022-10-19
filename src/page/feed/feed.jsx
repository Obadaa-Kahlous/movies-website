import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import Navbar from '../../component/navbar/navbar'

import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Feed = () => {
  const [value , setValue] = useState('popula')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const hh = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
        <Navbar />
        <div>
          <Outlet />  
        </div>
        <div className='fixed lg:top-[-60px] bottom-0 lg:right-0 w-[120px] h-[120px] rounded-full bg-main-color'></div>
        <button onClick={hh}> Obada </button>
    </>
  )
}

export default Feed

