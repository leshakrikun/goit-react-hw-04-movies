import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import API from '../Fetch/fetch';
import ImageGallery from '../components/ImageGallery/imageGallery'
import ImageGalleryItem from '../components/ImageGalleryItem/imageGalleryItem'


export default function MovieDetails () {
    
const {moviesId} = useParams();
    const [details, setDetails] = useState('');
    const [getTrends, setGetTrends] = useState('');
 //***************************************************** */
  useEffect(() => {
      
    API.FetchMovieDetails(moviesId).then(movie => {
        setDetails((movie));
        
    },
    console.log(66, details)
    )
    
  },[])

//***************************************************** */

return (
    <>
      
    {/*  {details !== "" ? 
    <ImageGallery>
      <ImageGalleryItem movie= {(details)} /* onClick={handleOpenModal} /> 
    </ImageGallery> : <></>} */}
    </>
)
}