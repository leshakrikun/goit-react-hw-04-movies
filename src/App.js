import { useState, useEffect, React } from 'react';
import { useHistory, NavLink, Link, useRouteMatch } from 'react-router-dom';
import { useRouter } from "./hooks/useRouter"

import API from './Fetch/fetch';
import MovieGallery from './components/MovieGallery/movieGallery'
import MovieGalleryItem from './components/movieGalleryItem/movieGalleryItem'
import Navigation from '../src/components/Navigation/navigation'


import Loader from 'react-loader-spinner'

/* import Button from './components/Button/button'
import Modal from './components/Modal/modal' */ 
import './App.css'

export default function App () {
   
  const [loading, setLoading] = useState(false);
  const [isBegin, setIsBeging] = useState(true);
  const {url} = useRouteMatch();
  const history = useHistory()
  
  const routing = useRouter(isBegin);

  const path = isBegin ? "/" : "/movies";


  useEffect(() => {
    history.push(path);
  }, [history]);

  return (
    <div className="App container">

      <Navigation />

      <header className="App-header">{routing}</header>
    </div>
  );
}
