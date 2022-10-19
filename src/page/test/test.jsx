import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { popularMovies } from '../../feature/popularMoviesSlice'

const Test = () => {

    const { popularMoviesData } = useSelector((state) => state.popularMovies)
    console.log(popularMoviesData);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(popularMovies())
    }, [,])

    return (
        <Container className=''>
            <h1 className='mb-[10px] text-[30px] text-white'> Popular Movies. </h1>
            <div className='grid grid-cols-12 lg:gap-10 gap-4'>
                {
                    popularMoviesData.map((info, key) => (
                        <Wrapper className='lg:col-span-6 col-span-12 cursor-pointer' key={key}>
                            <div className='grid grid-cols-12 md:gap-3 gap-1'>
                                <div className='sm:col-span-4 col-span-6  relative'>
                                    <img src={info.poster} className='opacity-[0.8] rounded-[5px] h-[240px] w-full' alt="" />
                                    <PlayIconContainer className=''>
                                        <PlayIcon> <ion-icon name="play-outline"></ion-icon> </PlayIcon>
                                    </PlayIconContainer>
                                </div>
                                <div className='sm:col-span-8 col-span-6'>
                                    <div className='flex justify-between flex-col  h-[240px]'>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='text-main-color font-bold'> {info.title} </h2>
                                            <div className='text-[#fff] p-1 rounded-[2px] w-fit flex gap-1'>
                                                <p className='font-bold'> {info.vote} </p>
                                                <span className='flex justify-center items-center text-main-color'><ion-icon name="star"></ion-icon></span>
                                            </div>
                                            <p className='text-[#fff] text-[14px] sm:block hidden'> {info.description.slice(0, 150)}... </p>
                                        </div>
                                        <ul className='flex gap-4 flex-wrap'>
                                            {
                                                info.genres.map((genre, key) => (
                                                    <li key={key} className='text-[14px] text-main-color opacity-[0.6]'> {genre.name} </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    ))
                }
            </div>
        </Container>
    )
}

export default Test

const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    @media(min-width : 1200px){
        width: 1170px;
        margin: 0 auto;
    }
    @media(max-width : 768px){
        width : 100%;
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
    }
`
const PlayIconContainer = styled.div`
    position: absolute;
    top: 0;
    left : 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background : rgba(0,0,0,0);
`
const PlayIcon = styled.div`
    width : 60px;
    height : 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 26px;
    border-radius: 50%;
    border : 2px solid #49c628;
    transition: 0.6s;
    opacity: 0;
`
const Wrapper = styled.div`
    transition: 0.4s;
    border-radius: 4px;
    padding : 5px;
    overflow: hidden;
    &:hover{
        background: #3f3e3e;
    }
    &:hover ${ PlayIcon } {
        opacity: 1;
    }
    &:hover ${ PlayIconContainer } {
        background : rgba(0,0,0,0.5);
    }
`