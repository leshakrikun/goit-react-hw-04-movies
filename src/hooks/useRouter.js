import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Movies from "../pages/movies";
import Home from "../pages/home";
import DetailsPage from "../pages/detailsPage";

import PageNotFound from "../pages/pageNotFound";

export const useRouter = (isBegin) => {
  const {url} = useRouteMatch();
  /* if (isBegin) { */
   /*  return (
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route path="/404">
          <PageNotFound />
        </Route>
        <Redirect to="404" /> }
      </Switch>
    );
  } */

  return (
    <Switch>
      <Route path="/home"exact>
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

     
      <Route path="/404">
        <PageNotFound />
      </Route>
      <Redirect to="404" />
    </Switch>
  );
};