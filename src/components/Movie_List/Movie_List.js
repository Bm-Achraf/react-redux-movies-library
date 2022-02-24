import React, {useEffect} from 'react'

import MovieApi from '../../Apis/Movie_Api';
import { ApiKey } from '../../Apis/Movie_ApiKey';

import { useDispatch, useSelector } from 'react-redux';
import {addMovies} from '../../features/movies/MovieSlice';
import { AllMovies, searchKey } from '../../features/movies/MovieSlice'; 
import Movie_card from '../Movie_card/Movie_card';

import './Movie_List.scss'

export default function Movie_List() {


  const dispatch = useDispatch();

  const Key = useSelector(searchKey);

  useEffect(() =>{
     const Movies = async () =>{
       const response = 
       await MovieApi.get(`?apikey=${ApiKey}&s=${Key}&type=movie`)
       .catch((err) => {console.log(err);})

       dispatch(addMovies({movies:response.data, input:'war'}));
     }
     Movies()
  }, [])

  const movies = useSelector(AllMovies);
  //console.log(movies.Search)
  const List_Of_Movie = movies.Response === "True"?
  (
    movies.Search.map((movie, index) => {
      return <Movie_card key={index} data={movie} />
    })
  )
  :(
     <div>
        <h3>{movies.Error}</h3>  
    </div>
  )



  return (
  <div className='Movie-List'>
    
    {List_Of_Movie}
    
  </div>
  )
}
