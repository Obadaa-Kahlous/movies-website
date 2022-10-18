import { configureStore } from "@reduxjs/toolkit";
import register from './registerSlice'
import getDataSlice from './getDataSlice'
import popularMovies from './popularMoviesSlice'
export default configureStore({
    reducer: {
        register,
        getDataSlice,
        popularMovies,
    }
})