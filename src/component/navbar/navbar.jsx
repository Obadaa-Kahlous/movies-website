import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('userData'))
    return (
        <Nav>
            <Ul>
                <LinkElem to=''>
                    <Li>
                        <span className='flex items-center justify-center'> <ion-icon name="tv-outline"></ion-icon> </span>
                        <span> Movies </span>
                    </Li>
                </LinkElem>
                <LinkElem to='genres'>
                    <Li>
                        <span className='flex items-center justify-center'> <ion-icon name="color-palette-outline"></ion-icon> </span>
                        <span> Genres </span>
                    </Li>
                </LinkElem>
            </Ul>
            <Wrapper className=''>
                <p> {user.name} </p>
                <img src={user.image} alt="" />
                <NavLink to=''>
                    <li>
                        <span className='flex items-center justify-center text-[30px] text-[red]'> <ion-icon name="heart"></ion-icon> </span>
                    </li>
                </NavLink>
            </Wrapper>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    backdrop-filter: blur(20px);
    z-index : 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a.active{
        /* color: #0A66C2;
        background-color: rgb(226 232 240); */
        /* &:after{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 100%;
            width: 2%;
            background-color: #0A66C2;
            transition: 0.4s;
            z-index: 1;
        } */
    }
`
const Ul = styled.nav`
    display: flex;
`
export const LinkElem = styled(NavLink)`
    position: relative;
    height: 80px;
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
    font-size: 18px;
`
const Wrapper = styled.div` 
    display: flex;
    align-items: center;
    gap: 16px;
    p{
        color: #fff;
        font-size: 20px;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`
