import { React, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import API from '../Fetch/fetch';
import Searchbar from '../components/Searchbar/searchbar';
import MovieGallery from '../components/MovieGallery/movieGallery'
import MovieGalleryItem from '../components/movieGalleryItem/movieGalleryItem'
import Loader from 'react-loader-spinner'

let oldPage
const Movies = () => {
    
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState('');
  const history = useHistory()

  const handleChange = (e) => {
    setSearch(e.target.value )
  } 

  const handleSubmit = e => {
    e.preventDefault();
    if(search.trim()){
      setLoading(true)
    API.FetchMovie(search)
      .then(searchMovie =>  {
        setSearchMovie((searchMovie))
        oldPage = searchMovie
        history.push(`?query=${search}`) 
      setLoading(false)}, 
        )
      }
  };

  useEffect(() => {
    setSearchMovie((oldPage))
  },[history])

  return (
    <div>  
      <Searchbar  search = {search} handleSubmit ={handleSubmit}  handleChange={handleChange} />
      {loading && 
      <div>
        <Loader 
          type={ 'Puff'}
          className='loader'>
        </Loader>
      </div>}
      {searchMovie &&
        <MovieGallery>
          <MovieGalleryItem movie= {(searchMovie)} /> 
        </MovieGallery>}
    </div>
)}
export default  Movies