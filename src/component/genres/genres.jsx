import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import img from '../../assets/slider-bg.jpg'
import { moviesType } from '../../store/getDataSlice'

const Genres = () => {

    const dispatch = useDispatch()
    const { moviesTypeData } = useSelector((state) => state.getDataSlice)
    useEffect(() => {
        dispatch(moviesType())
    }, [,])
    console.log(moviesTypeData);

    return (
        <>
            <header >
                <Wrapper>
                    {
                        moviesTypeData.map((item, key) => (
                            <Container className='obada' key={key}>
                                <h1 className='md:text-[30px] text-[18px] text-[#fff]'> {item.name} </h1>
                                <p className='md:text-[28px] text-[16px] font-bold text-[#49c628a6]'> {item.movies_count} </p>
                            </Container>
                        ))
                    }
                </Wrapper>
            </header>
            <style>
                {`
                header{
                    background: url(${ img }) no-repeat;
                    background-position: center;
                    text-align: center;
                    background-size: cover;
                    position: relative;
                    padding-top: 100px;
                    padding-bottom: 50px;
                    height : 100vh;
                }
            `}
            </style>
        </>
    )
}

export default Genres

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.1s;
    &:hover{
        backdrop-filter: blur(20px);
    }
    @media(max-width : 768px){
        width: 45%;
    }
`