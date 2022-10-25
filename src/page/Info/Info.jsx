import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieImage } from '../../feature/get-movies-info-slice';

const Info = () => {
    const { moviesImage, isLoading } = useSelector((state) => state.getMoviesInfo)
    console.log(moviesImage);
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movieImage(params.id.replace(':', '')))
    }, [dispatch])
    return (
        <>
            <div className='text-[#fff]'>movie</div>
            {/* {
                moviesImage.map((item)=>(
                    <img src={item.image} alt="" />
                ))
            } */}
        </>

    )
}

export default Info