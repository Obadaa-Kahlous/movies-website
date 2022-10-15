import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import InputForm from '../shared/input/input-form';
import { resetRegister, signUp } from '../../store/registerSlice';
import Loader from '../loader/loader';


const Rejecter = () => {

    const navigate = useNavigate()

    const { isLoading , status } = useSelector((state) => state.register)
    const dispatch = useDispatch()
    console.log(isLoading , status);

    useEffect(() => {
      if (status === 200) {
        navigate("/feed");
        dispatch(resetRegister())
      } 
    }, [status,dispatch]);
  

    const [values , setValues ] = useState({
        email : '',
        password : '',
        username : '',
      });
      const handleSummit = (e) =>{
        e.preventDefault();
        dispatch(signUp(values))
      }
      const [showPassword , setShowPassword] = useState(false)
      const handleChange = (e) =>{
        setValues({...values , [e.target.name]: e.target.value})
      }
      const handleShowPassword = () =>{setShowPassword(!showPassword)}

      const InputsData = [
        {
            id: 1,
            label: '',
            name : 'username',
            type : 'text',
            placeholder : 'username',
            ErrorMessage : 'User name should be 6-16 characters and Should not incloude any special character',
            pattern : `^[A-Za-z0-9]{6,16}`,
            icon : 'person-outline',
            required : false,
        },
        {
            id: 2,
            label: '',
            name : 'email',
            type : 'email',
            placeholder : 'Email',
            ErrorMessage : 'It should be a valid email address!',
            pattern : `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$`,
            icon : 'mail-outline',
            required : false,
        },
        {
            id: 3,
            label: '',
            name : 'password',
            type : showPassword ? 'text' : 'password',
            placeholder : 'Password',
            ErrorMessage : '1 letter, 1 number and 1 special character!',
            pattern : `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$`,
            icon : 'lock-closed-outline',
            required : false,
        },
    
    ]
  return (
    <>
        <Title className=''> Rejecter </Title>
        <p className='text-[#B0B3B9] text-[14px]'> have an account? 
            <Link to='/'> 
                <span className='text-[#49C628] ml-[5px] font-bold cursor-pointer md:text-[14px] text-[12px]'> 
                     Login Now!
                </span> 
            </Link>        
        </p>
        <form onSubmit={handleSummit} className='w-full'>
            {
                InputsData.map((item,key)=>(
                <InputForm
                    key={key}
                    labelText={item.label}
                    id={item.id}
                    name={item.name}
                    onChange={handleChange}
                    type={item.type}
                    placeholder={item.placeholder}
                    pattern={item.pattern}
                    required={item.required}
                    ErrorMessage={item.ErrorMessage}
                    icon={item.icon}
                    isPassword={showPassword}
                    onClick={handleShowPassword}
                />
                ))
            }
            {
              isLoading ? <Loader /> : <Button className=''> Rejecter  </Button>
            }            
        </form>
    </>
  )
}

export default Rejecter


const Title = styled.h5`
  font-size: 60px;
  color : #333;
  @media(max-width : 1050px){
    font-size: 40px;
  }
`
const Button = styled.button`
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 5px;
  margin-top : 10px;
  font-size: 18px;
  box-shadow: 0px 4px 20px 0px #49c628a6;
  background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
  @media(max-width : 768px){
    font-size: 14px;
    padding: 7px 35px;
    margin: 15px 0px;
  }
`