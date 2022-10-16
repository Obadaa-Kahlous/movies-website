import React from 'react'
import img from '../../assets/slider-bg.jpg'

const Movies = () => {
  return (
    <>
    <header>

    </header>
    <style>
        {`
        header{
            background: url(${ img }) no-repeat;
            background-position: center;
            text-align: center;
            background-size: cover;
            position: relative;
            padding-top: 200px;
            padding-bottom: 50px;
        }
    `}
    </style>
</>
  )
}

export default Movies