import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const navbarData = [
        {
            to: '/feed',
            icon: 'tv-outline',
            title: 'Movies',
        },
        {
            to: 'Genres',
            icon: 'color-palette-outline',
            title: 'Genres'
        },
        {
            to: 'topmovies',
            icon: 'earth-outline',
            title: 'Top Movies',
        },
        {
            to: '/popular',
            icon: 'bar-chart-outline',
            title: 'popular',
        }
    ]

    const user = JSON.parse(localStorage.getItem('userData'))
    return (
        <Nav>
            <Ul>
                {
                    navbarData.map((item, key) => (
                        <LinkElem to={item.to} key={key}>
                            <Li>
                                <span className='flex items-center justify-center'> <ion-icon name={item.icon}></ion-icon> </span>
                                <span> {item.title} </span>
                            </Li>
                        </LinkElem>
                    ))
                }
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
    box-shadow: 0 5px 25px 0 rgb(0 0 0 / 30%)
`
const Ul = styled.nav`
    display: flex;
    gap: 10px;
`
export const LinkElem = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width : 140px;
    gap: 5px;
    height: 80px;
    color: #fff;
    font-size: 18px;
    transition: 0.3s;
    &:after{
        position: absolute;
        content : '';
        bottom : 0px;
        left : 0px;
        width : 0;
        height : 2px;
        background : #49c628;
        transition: 0.3s;
    }
    &:hover:after{
        width : 100%;
    }
    &:hover{
        color : #49c628;
    }
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
