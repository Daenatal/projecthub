import { useState, useEffect} from "react";

import MyForm from "../../components/movie-search-form/movie-search-form.component";


const Movies = () => {

  //const [ userPosts, setPosts] = useState([]);
  const [ movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts));
  // }, []);
    
  // useEffect(() => {
  //   fetch('http://www.omdbapi.com/?apikey=52051b54&t=Terminator')
  //     .then((response) => response.json())
  //     .then((posts) => setMovies(posts));
  // }, [])

  
    return (
      <div className="user-post">
        <h1>Enter in a movie title</h1>
        <MyForm />
        {/* <h2>Current Movie</h2>
        <div key={movies.imdbID}className="item">
            <h1>{movies.Title} | Released {movies.Year}</h1>
            <p>Genre: {movies.Genre}</p>
            <p>Plot: {movies.Plot}</p>
        </div> */}
        {/* {movies.map((movie) =>{
          return(
            <div key={movie.imdbID}className="item">
              <h1>{movie.title} | Released {movie.year}</h1>
              <p>{movie.plot}</p>
            </div>
          )
            
            }
          )
        } */}
      </div>
    );
  };

  export default Movies;