import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Movie_Detail.scss';
import MovieApi from '../../Apis/Movie_Api';
import { ApiKey } from '../../Apis/Movie_ApiKey';



export default function Movie_Detail() {

  const [movie, setMovie] = useState(null);

  const {MovieID} = useParams();

  useEffect(()=>{
    const Movie = async () =>{
      const response = await MovieApi.get(`?apikey=${ApiKey}&i=${MovieID}`)
      .catch((err) => {console.log(err)})

      setMovie(response.data);
    }
    Movie();

  } ,[])


  console.log(movie)
  if(movie!=null)
  return (
    <div className='Movie_Detail'>
        <div className='img-container'>
            <div>
                <img src={movie.Poster} />
            </div>
        </div>

        <div className='info-container'>
            
            <div className='Title-container paddin-left-option'><span>{movie.Title}</span></div>

            <div className='Year-container paddin-left-option'><span className='pub-color'>{movie.Year}</span></div>
           
           
            <div className='Genre paddin-left-option'><span className='pub-color'>Genre: {movie.Genre}</span></div> 
            <div className='Metascore paddin-left-option'><span className='pub-color'>Metascore: {movie.Metascore}</span></div>

            <div className='Time paddin-left-option'><span className='pub-color'>Time: {movie.Runtime}</span></div> 

            <div className='paddin-left-option pub-color' style={{marginTop:'30px'}}>Plot:</div>
            <div className='Plot paddin-left-option'><span className='pub-color'>{movie.Plot}</span></div>

        </div>
    </div>
  )
  else
  return(
    <div className='Movie_Detail'>
      
    </div>
  )
}
