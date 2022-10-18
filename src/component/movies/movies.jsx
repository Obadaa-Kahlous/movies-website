import React from 'react'
import styled from 'styled-components'
import img from '../../assets/slider-bg.jpg'
import Genres from '../genres/genres'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MoviesCard from '../movies-card/movies-card';

import image1 from '../../assets/slider3.jpg'
import image2 from '../../assets/bullettrain_onesheet_1400x2100_v4.jpg'


const Movies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1500,
    lazyLoad: true,
    arrows: false,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 400,
          speed : 1000,
        }
      }
    ]
  };
  return (
    <>
      <Header>
        <div className=''>
          
        <div className=' text-white'>
              <h2 className='p-[10px] ml-[10px] text-[30px]'>Top Movies.</h2>
              <Slider {...settings}>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
                <a>
                  <MoviesCard image={image1}/>
                </a>
                <a>
                  <MoviesCard image={image2}/>
                </a>
              </Slider>
          </div>

        <MoviesType className='md:w-[80%] w-full mx-auto my-5 relative'>
          <Genres />
        </MoviesType>



        </div>

      </Header>
      <style>
          {`
            .dd{
              background : red;
              height : 400px;
              padding : 20px;
              margin : 50px 10px;
              border-radius :20px;
              cursor: pointer;
              transition : 0.4s;
            }
            .dd:hover{
              transform : scale(1.1)
            }
            @media(max-width : 768px){
              .dd{
              background : blue;
              height : auto;
              padding : 20px;
              margin : 50px 0px
            }
            }
          `}
      </style>
    </>
  )
}

export default Movies

const Header = styled.header`
  height: auto;
  background: url(${ img }) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  @media(max-width : 768px){
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 100px;
  }
`
const MoviesType = styled.div`
      &:after{
        position: absolute;
        content : '';
        bottom: 10px;
        left: 0;
        height : 3px;
        width: 70%;
        background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
    }
`