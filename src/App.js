import { useState, useEffect } from 'react';
import { useHistory, NavLink, Link, useRouteMatch } from 'react-router-dom';
import { useRouter } from "./hooks/useRouter"

import API from './Fetch/fetch';
import ImageGallery from './components/ImageGallery/imageGallery'
import ImageGalleryItem from './components/ImageGalleryItem/imageGalleryItem'
import Navigation from '../src/components/Navigation/navigation'


/* import Loader from 'react-loader-spinner'

import Button from './components/Button/button'
import Modal from './components/Modal/modal' */
import './App.css'
let history 
export default function App () {
   
  const [loading, setLoading] = useState(false);
  const [isBegin, setIsBeging] = useState(true);
  const {url} = useRouteMatch();
  history = useHistory()
  
  const routing = useRouter(isBegin);

  const path = isBegin ? "/home" : "/movies";
  console.log(1,path);
  console.log(2,history);

  useEffect(() => {
    history.push(path);
  }, [history, path]);

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">{routing}</header>
    </div>
  );
}

//***************************************************** */





  /* 
  const [photos, setPhotos] = useState('');
  const [search, setSearch] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleMouseClick);
    return () => { 
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleMouseClick);
  }
  }, [showModal]);

  const handleKeyDown = (e) => {
    if (e.code === 'Escape' && showModal) {
      toggleModal();
    }
  }

  const handleMouseClick = (e) => {
    if (showModal && e.target.tagName==='DIV') {
      toggleModal();
   }
  }

  const toggleModal = () =>{
    setShowModal(!showModal)  
  }
  
  const handleSubmit = e => {
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
  };
  
 

  const onMoreClick = () => {
    API.FetchPhoto(search)
      .then(photos => {
        setPhotos(photo =>[...photo, ...photos.hits])
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
  }; 

  const handleOpenModal = e => {
    if (e.currentTarget.tagName === 'LI') {
      setShowModal(true)
      setLargeImage(e.target.lowsrc)
    };
  }
   */
