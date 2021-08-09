import s from './imageGalleryItem.module.css';

export default function ImageGalleryItem ({movie, /* onClick */})  {
  console.log(10, movie.results);
  return(
    <>
       {movie.results.map (state =>(
        <li className={s.imageGalleryItem} key={state.id}  /*  onClick={onClick} */ >
        {state.original_title}
          {/* <img src={state.webformatURL} lowsrc={state.largeImageURL}  alt={state.tags} className={s.imageGalleryItemImage}/> */}

        </li>
      ))} 
    </>
)}

