import {  React, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Home = lazy (() => import ('../pages/home.js'/* webpackChunkName: 'Home' */))
const DetailsPage = lazy (() => import ("../pages/detailsPage" /* webpackChunkName: 'DetailsPage' */))
const Movies = lazy (() => import ('../pages/movies'/* webpackChunkName: 'DetailsPage' */))

export const useRouter = (isBegin) => {
 
  return (
    <div>
      <Suspense fallback = {<div><Loader className='loader'></Loader> </div>}> 
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home:moviesId">
        <DetailsPage />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:moviesId">
        <DetailsPage />
      </Route>
      <Redirect to="/" /> 
    </Switch>
    </Suspense>
    </div>
  );
};