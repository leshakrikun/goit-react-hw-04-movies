import { React, useState, useEffect } from 'react';
import API from '../Fetch/fetch';
import Searchbar from '../components/Searchbar/searchbar';
import ImageGallery from '../components/ImageGallery/imageGallery'
import ImageGalleryItem from '../components/ImageGalleryItem/imageGalleryItem'

console.log(34);


 const Movies = () => {
    console.log(35);
    const [search, setSearch] = useState('');


    const [searchMovie, setSearchMovie] = useState('');
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        console.log(51);
      }, [search]);

    const handleChange = (e) => {
    setSearch(e.target.value )
    } 
  

//************************************************************* */
  /*   useEffect(() => {
      API.FetchTrends()
      .then(movie => {
        setMovie((movie));
      })
    },[]) */

//************************************************************* */
/* const handleSubmit = e => {
  e.preventDefault();
  API.resetPage()
  setLoading(true)
  const form = e.target 
  API.FetchPhoto(search)
    .then(photos =>  {
      setPhotos(photos.hits)
      setLoading(false)})
    .catch(errors => {
      setErrors('Повторите запрос')
      setLoading(false)
    });
    form.reset(); 
}; */
   const handleSubmit = e => {
      e.preventDefault();
      /* API.resetPage()
      setLoading(true)  */
      const form = e.target 
      API.FetchMovie(search)
        .then(searchMovie =>  {
          console.log('search', search);
          console.log('searchMovie', searchMovie);
          setSearchMovie((searchMovie))
          console.log('searchMovie2', searchMovie);
          /* setLoading(false) */},
          console.log('searchMovie4', searchMovie)
          )
          console.log('searchMovie3', searchMovie)
        /* .catch(errors => {
          setErrors('Повторите запрос')
         setLoading(false) 
        });
     form.reset();  */ 
    };


    return (
          <>  
         <Searchbar  search = {search} handleSubmit ={handleSubmit}  handleChange={handleChange} />

         {searchMovie !== "" ? 
         <ImageGallery>
           <ImageGalleryItem movie= {(searchMovie)} /* onClick={handleOpenModal} *//> 
         </ImageGallery> : <></>}
         </>
    )}
    export default  Movies