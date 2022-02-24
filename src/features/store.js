import { configureStore } from "@reduxjs/toolkit";

import movies from './movies/MovieSlice';

const store = configureStore({
    reducer:{
        movies
    }
});

export default store;