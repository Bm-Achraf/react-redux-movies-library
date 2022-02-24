import React from 'react';
import { Link } from 'react-router-dom';
import './Movie_card.scss';

const Movie_card = (props) =>{


  const {data} = props;

  return (
    <div className='Movie-card'>
      <Link to={`/movie/${data.imdbID}`}  className='info-container'>
      <div className='info-container'>
        
        <div className='title-container'>
          <span>{data.Title}</span>
        </div>
        
      </div>
      </Link>
        <div className='img-container'>
           <img src={data.Poster} alt={data.Title} />
        </div>
    </div>
  )
}

export default Movie_card;