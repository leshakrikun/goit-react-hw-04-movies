import { useState, useEffect, React } from 'react';
import { useParams } from "react-router-dom";
import API from '../Fetch/fetch';
import FilmItem from '../components/FilmItem/filmItem'

export default function MovieDetails () {
    
const {moviesId} = useParams();
const [details, setDetails] = useState('');
 
  useEffect(() => {
    API.FetchMovieDetails(moviesId).then(movie => {
        setDetails((movie));
    },
    )
  },[])

return (
  details &&  <FilmItem movie= {(details)}  /> 
)
}