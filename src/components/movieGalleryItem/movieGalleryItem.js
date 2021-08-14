import { Link, useRouteMatch } from 'react-router-dom';
import {React} from 'react';
import s from './movieGalleryItem.module.css';

export default function MovieGalleryItem ({movie})  {
  const {url} = useRouteMatch();

  return(
    <div>
       {movie.results.map (state =>(
        <li className={s.movieGalleryItem} key={state.id}>
         <Link to={`${url}/${state.id}`}>{state.original_title}</Link> 
        </li>
      ))} 
    </div>
)}

