import { useState, useEffect } from 'react';
import API from '../Fetch/fetch';
import ImageGallery from '../components/ImageGallery/imageGallery'
import ImageGalleryItem from '../components/ImageGalleryItem/imageGalleryItem'


export default function Home () {

    const [movie, setMovie] = useState('');
    const [getTrends, setGetTrends] = useState('');
 //***************************************************** */
  useEffect(() => {
    API.FetchTrends().then(movie => {
      setMovie((movie));
    })
  },[])

//***************************************************** */

return (
    <>
      
     {movie !== "" ? 
    <ImageGallery>
      <ImageGalleryItem movie= {(movie)} /* onClick={handleOpenModal} *//> 
    </ImageGallery> : <></>}
    </>
)
}