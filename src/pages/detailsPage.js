import { useState, useEffect, React } from 'react';
import { useParams, useHistory } from "react-router-dom";
import API from '../Fetch/fetch';
import FilmItem from '../components/FilmItem/filmItem'

let err
export default function MovieDetails () {
  const [errors, setErrors] = useState(null);  
  const {moviesId} = useParams();
  const [details, setDetails] = useState('');
  const history = useHistory()
  useEffect(() => {
    API.FetchMovieDetails(moviesId).then(movie => {
      if(movie === 404){
        throw setErrors(err);
      }
    return movie
    })
    .then(movie => {
      setDetails((movie)); 
    })
    .catch(err => {
      history.push("/home")
    });
  },[moviesId, history])

  return (
  
  details &&  <FilmItem movie= {(details)}  />
  
  )
}