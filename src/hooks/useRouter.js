import {  React, Suspense, lazy } from 'react'
import { Redirect, Switch, Route  } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Home = lazy (() => import ('../pages/home.js'/* webpackChunkName: 'Home' */ ))
const DetailsPage = lazy (() => import ("../pages/detailsPage" /* webpackChunkName: 'DetailsPage'*/ ))
const Movies = lazy (() => import ("../pages/movies" /* webpackChunkName: 'Movies' */))

export const useRouter = () => {
 
  return (
    <div>
      <Suspense fallback = {<Loader className='loader'></Loader>}> 
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/home/:moviesId">
            <DetailsPage />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:moviesId">
            <DetailsPage />
          </Route>
          
          <Redirect to="/home" />  
        </Switch>
    </Suspense>
    </div>
  );
};