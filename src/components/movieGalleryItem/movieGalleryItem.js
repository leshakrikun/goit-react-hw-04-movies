import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import s from './movieGalleryItem.module.css';

export default function MovieGalleryItem ({movie})  {
  
  const {url} = useRouteMatch();
  const location = useLocation();
 
  return(
    <>
      {movie.results.map (state =>(
        <li className={s.movieGalleryItem} key={state.id}>
         <Link to=
          {{pathname: `${url}/${state.id}`,
            state: location.pathname, 
          }}>
           {state.original_title}</Link> 
        </li>
      ))} 
    </>
)}

