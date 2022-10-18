import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
}

const popularMovies = createAsyncThunk('popular/popularMovies' , async (value , thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.post(`http://51.75.52.119/~mymovies/public/api/movies?type=${value}`)
        console.log(res);
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
})

const popularMoviesSlice = createSlice({
    name : 'popular',
    initialState,
    extraReducers:{
        [popularMovies.pending]: (state , action)=>{
            state.isLoading = true
        },
        [popularMovies.fulfilled]: (state , action)=>{
            state.isLoading = false
            state.moviesTypeData = action.payload.data.data
        },
        [popularMovies.rejected]: (state ,action)=>{
            state.isLoading = false
        }
    }
})

export default popularMoviesSlice.reducer 