import { Link, useRouteMatch } from 'react-router-dom';
import s from './imageGalleryItem.module.css';
/* import moduleName from 'react-router-dom' */
export default function ImageGalleryItem ({movie, /* onClick */})  {
  const {url} = useRouteMatch();
  console.log('url', url);
   console.log(10, movie.results); 
  return(
    <>
       {movie.results.map (state =>(
        <li className={s.imageGalleryItem} key={state.id}  /*  onClick={onClick} */ >
         <Link to={`${url}/${state.id}`}>{state.original_title}</Link> 
          {/* <img src={state.webformatURL} lowsrc={state.largeImageURL}  alt={state.tags} className={s.imageGalleryItemImage}/> */}

        </li>
      ))} 
    </>
)}

