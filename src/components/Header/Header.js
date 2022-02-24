import React, { useState } from 'react'
import MovieApi from '../../Apis/Movie_Api';
import { ApiKey } from '../../Apis/Movie_ApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/MovieSlice';

import './Header.scss';
import { useHistory } from 'react-router-dom';

import UserState from './user';

export default function Header() {



  const history = useHistory();
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  
  const GetData = (key) => {
        const Movies = async () =>{
          const response = 
            await MovieApi.get(`?apikey=${ApiKey}&s=${key}&type=movie`)
            .catch((err) => {console.log(err);})
            
            dispatch(addMovies({input:key, movies:response.data}))
        }
        if(key!='')
        Movies()

        else
        alert("wtf")

    //},[])
  }

  const searchData = (key) =>{
    GetData(key);
    history.push('/');
  }

  return ( 
    <header className='Header'>
       <div className='logo-container'>
          <div><span onClick={()=>searchData('war')}>Your Movie</span></div>
       </div>

       <div className='nav-Container'>
         <form onSubmit={(e) => {e.preventDefault()}}>
            <input onChange={e => setInput(e.target.value)} type='search' />
            <button onClick={() => searchData(input)}>Search</button>
        </form>
       </div> 



       <div className='rigestration-btn-container'>
          <UserState /> 
               
       </div>
    </header>
  )
}