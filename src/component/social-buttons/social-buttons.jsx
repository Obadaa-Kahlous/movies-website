import React from 'react'
import styled from 'styled-components'

const SocialButtons = () => {
  return (
    <UL>
        <Li className='bg-[#3b5998]'>  
            <span> Facebook </span>
            <span className='flex justify-center items-center'> <ion-icon name="logo-facebook"></ion-icon>   </span>
        </Li>
        <Li className='text-[#000] bg-[#fff]'>  
            <span> Google </span>
            <span className='flex justify-center items-center'> <ion-icon name="logo-google"></ion-icon>   </span>
        </Li>
        <Li className='bg-[#1dcaff]'>  
            <span> Twitter </span>
            <span className='flex justify-center items-center'> <ion-icon name="logo-twitter"></ion-icon>   </span>
        </Li>
    </UL>
  )
}

export default SocialButtons

const UL = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
    @media(max-width : 768px){
        margin-top: 5px;
        gap: 4px;
    }
`

const Li = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    min-width: 120px;
    border-radius: 4px;
    cursor: pointer;
    padding : 10px 20px;
    text-align: center;
    @media(max-width : 768px){
        min-width: 0px;
        padding: 10px  10px;
        font-size: 12px;
    }
`