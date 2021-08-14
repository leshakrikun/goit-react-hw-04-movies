import { React, useState, useEffect } from 'react';
import API from '../Fetch/fetch';
import Searchbar from '../components/Searchbar/searchbar';
import MovieGallery from '../components/MovieGallery/movieGallery'
import MovieGalleryItem from '../components/movieGalleryItem/movieGalleryItem'
import Loader from 'react-loader-spinner'

 const Movies = () => {
    
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const [searchMovie, setSearchMovie] = useState('');
    const [errors, setErrors] = useState(null);


    const handleChange = (e) => {
    setSearch(e.target.value )
    } 
  
   const handleSubmit = e => {
      e.preventDefault();
      /* API.resetPage() */
      
      const form = e.target 
      if(search.trim()){
        setLoading(true)
      API.FetchMovie(search)
        .then(searchMovie =>  {
         
          setSearchMovie((searchMovie))
         
        setLoading(false)},
          
          )
        } 
        /* .catch(errors => {
          setErrors('Повторите запрос')
         setLoading(false) 
        });
     form.reset();  */ 
    };


    return (
          <div>  
         <Searchbar  search = {search} handleSubmit ={handleSubmit}  handleChange={handleChange} />
         {loading && <Loader 
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} className='loader'>
        </Loader>}
         {searchMovie &&
         <MovieGallery>
           <MovieGalleryItem movie= {(searchMovie)} /* onClick={handleOpenModal} *//> 
         </MovieGallery>}
         </div>
    )}
    export default  Movies