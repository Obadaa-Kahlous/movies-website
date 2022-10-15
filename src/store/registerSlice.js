import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    error : false,
    status : null,
}
export const signUp = createAsyncThunk('register/signup' , async (values, thunkAPI)=>{
    console.log(values);
    const {rejectWithValue} = thunkAPI
    const formData = new FormData()
    formData.append('email' , values.email)
    formData.append('password' , values.password)
    formData.append('name' , values.username)
    try {   
        const res = axios.post('http://51.75.52.119/~mymovies/public/api/register' , formData, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(res);
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const registerSlice = createSlice({
    name :'register',
    initialState:initialState,
    reducers: {
        resetRegister: () => initialState,
    },
    extraReducers:{
        [signUp.pending]:(state , action) =>{
            state.isLoading = true
        },
        [signUp.fulfilled]:(state , action) =>{
            state.isLoading = false
            state.status = action.payload.status
        },
        [signUp.rejected]:(state , action) =>{
            state.isLoading = false
        },
    }
})

export const { resetRegister } = registerSlice.actions
export default registerSlice.reducer