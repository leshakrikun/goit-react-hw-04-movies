import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import API from '../../Fetch/fetch';
import s from './filmItem.module.css';

export default function FilmItem ({movie})  {
    const [cast, setCast] = useState('');
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState(null);
    const {moviesId} = useParams();
    const base_url = 'https://image.tmdb.org/t/p/w500'
    
    const {poster_path, tagline, overview, title, release_date, vote_average, genres} = movie
    
    const releaseDate=new Date(release_date);
    const {url} = useRouteMatch();
    useEffect(() => {
        API.FetchMovieCredits(moviesId).then(cast => {
            setCast((cast));
        },
        
        )
        .catch(errors => {
            setErrors('Информация отсутствует')
            
          });
      },[])
    
      useEffect(() => {
      API.FetchMovieReview(moviesId).then(review => {
        setReview((review));
      },
      )
    },[])
    
return (
    <div>
    <div className={s.details}>
    <img src = {base_url + poster_path}   alt={tagline} className={s.poster}/>
    <div className={s.detailsInfo}>
    <h2 className={s.title}>{title} ({releaseDate.getFullYear()}) </h2>
    <p className={s.vote}>User Score: {vote_average}</p>
    <h3 className={s.titleOverview}>Overview</h3>
    <p className={s.overview}>{overview}</p>
    <h4 className={s.titleGenres}>Genres</h4>
    <ul className = {s.genres}>
        {genres.map (name=>(
            <li className = {s.genresName} key={name.id}>{name.name}</li>
        ))}
    </ul>
    </div>
    </div>
    <div className={s.additional}>
    <p>Additional information</p>
    <ul className={s.infoLinks}>
        <NavLink className={s.infoLinksItem} to={`${url}/cast`}>Cast</NavLink> 
        <NavLink className={s.infoLinksItem} to={`${url}/review`}>Reviews</NavLink> 
    </ul>
    </div>
        {cast &&
            <Route path =  {`${url}/cast`}>
                <ul className = {s.cast}>
                    {cast.cast.map (name=>(
                    <li className = {s.castName} key={name.credit_id}>
                        {name.profile_path && <img src = {base_url + `${name.profile_path}`}   alt={`${name.name}`} className={s.castPoster}/>}
                        {name.name}
                    </li>
                    ))}
                </ul>
            </Route>    
        }
        {review &&
            <Route path =  {`${url}/review`}>
                <ul className = {s.review}>
                    {review.results.map (name=>(
                    <li className = {s.reviewName} key={name.id}>
                        <h3>Auhor: {name.author}</h3>
                        <p>{name.content}</p>
                    </li> 
                    ))}
                </ul>
            </Route>    
        }
    </div>
)
}