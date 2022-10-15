import { configureStore } from "@reduxjs/toolkit";
import register from './registerSlice'
export default configureStore({
    reducer: {
        register,
    }
})