import { configureStore } from "@reduxjs/toolkit";
import register from './registerSlice'
import getDataSlice from './getDataSlice'
export default configureStore({
    reducer: {
        register,
        getDataSlice,
    }
})