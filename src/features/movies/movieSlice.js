import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../../common/movieApi';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async({page, category}) => {
    const response = await movieApi
            .get(`./movie/${category}?page=${page}`);

    //console.log(response.data);
    return response.data;
});

export const fetchAsyncMovieDetail = createAsyncThunk(
    'movies/fetchAsyncMovieDetail', 
    async(movie_id) => {
    const response = await movieApi
            .get(`./movie/${movie_id}`);

    console.log(response.data);
    return response.data;
});



const initialState = {
    movies:{},
    selectedMovie:{},
    totalResults: 0,
    page: 1,
    totalPage: 1,
    category: 'now_playing',
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        prevPage: (state) => {
            state.page = Math.max(1, state.page - 1);
            
        },
        nextPage: (state) => {
            state.page += 1;
            state.page = Math.min(state.page, state.totalPage);
        },

        setCategory: (state, { payload }) => {
            state.category = payload;
        },


    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending...");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched!");
            return {...state, movies: payload, totalPage:payload.total_pages };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, {payload}) => {
            console.log("Movie Detail Fetched!");
            return {...state, selectedMovie: payload};
        },
        [fetchAsyncMovieDetail.rejected]: () => {
            console.log("Rejected!");
        },
    }
});

export const {addMovies, prevPage, nextPage, setCategory} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;