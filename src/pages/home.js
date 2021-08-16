import { useState, useEffect, React} from 'react';
import API from '../Fetch/fetch';
import MovieGallery from '../components/MovieGallery/movieGallery'
import MovieGalleryItem from '../components/movieGalleryItem/movieGalleryItem'

export default function Home  ()  {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    API.FetchTrends().then(movie => {
      setMovie((movie));
    })
  },[])

  return (
    <>
      <h1>Trending Today</h1>
      {movie &&
        <MovieGallery>
          <MovieGalleryItem movie= {(movie)} /> 
        </MovieGallery>}
    </>
  )
}
