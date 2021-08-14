import {  React, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Movies from "../pages/movies";
/* import Home from "../pages/home"; */
import DetailsPage from "../pages/detailsPage";
const Home = lazy (() => import ('../pages/home.js'))
/* import PageNotFound from "../pages/pageNotFound"; */

export const useRouter = (isBegin) => {
 
  return (
    <div>
      <Suspense fallback = {<div>загружаем</div>}> 
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

     
      {/* <Route path="/404">
        <PageNotFound />
      </Route>
      <Redirect to="404" /> */}
    </Switch>
    </Suspense>
    </div>
  );
};