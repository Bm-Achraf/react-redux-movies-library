import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchKey: 'war'
};

const MovieSlice = createSlice({
    name: "movies",

    initialState,

    reducers:{
        addMovies: (state, {payload}) =>{
            state.searchKey = payload.input;
            state.movies = payload.movies;
        }
    },
});

export const {addMovies, searchMovies} = MovieSlice.actions; 

export const searchKey = (state => state.movies.searchKey);
export const AllMovies = (state => state.movies.movies);

export default MovieSlice.reducer;