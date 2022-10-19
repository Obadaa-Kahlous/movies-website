import { configureStore } from "@reduxjs/toolkit";
import register from '../feature/registerSlice'
import getDataSlice from '../feature/getDataSlice'
import popularMovies from '../feature/popularMoviesSlice'
export default configureStore({
    reducer: {
        register,
        getDataSlice,
        popularMovies,
    }
})