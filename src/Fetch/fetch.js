//API Read Access Token (v4 auth)
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmMwYjFkY2JmOTRjNjM2MDBiMTVjOTk1MzI1YzllNCIsInN1YiI6IjYxMTE2NjYwNWM1Y2M4MDA1ZWM2Y2I4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZhqOPRklakWM0ksWqz0RhjUSd-pYwtYW7L0-Dij9BiA

const key = '42c0b1dcbf94c63600b15c995325c9e4';
let page = 0

function FetchTrends() {
  
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`).then(response => {
    
    if (response.ok) {
  

      return response.json();
    }
  });
}

function FetchMovie(search) {
  console.log('fetch', search);
    
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false`).then(response => {
    console.log(22,response);
    if (response.ok) {
      return response.json();
    }
  });
}

function FetchMovieDetails(moviesId) {
    
  return fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${key}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

function FetchMovieCredits(search) {
    
  return fetch(`https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${key}&language=en-US`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

function FetchMovieReview(search) {
    
  return fetch(`https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${key}&language=en-US&page=1`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}


const api = {
  FetchMovieDetails,
  FetchMovie,
  FetchMovieCredits,
  FetchMovieReview,
  FetchTrends,
  resetPage,
  page
};

function incrementPage() {
  page += 1;
}
  
function resetPage() {
  page = 0;
}
incrementPage()
export default api;