import { useState, useEffect, Fragment } from "react";

const MyForm = () => {

    const [findMovie, searchMovie] = useState([]);
    const [moviefound, setMovie] = useState('terminator');

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        // console.log(form);
        // console.log(formData);

        const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
        // console.log(formJson.movieTitle);
        const title = formJson.movieTitle;
        console.log(title);
        searchMovie(title);
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=52051b54&t=${findMovie}`)
        .then((response) => response.json())
        .then((posts) => setMovie(posts));
    }, [findMovie])

    return (
        <Fragment>
            <form className="search-form" method="post" onSubmit={handleSubmit}>
            <label>
                  Enter Movie to Search For:
                  <input name="movieTitle" />
                  <button type="submit">Search Now</button>
                </label>
            </form>
            <hr />
            <div key={moviefound.imdbID}className="item">
                <h1>Current Movie Details:</h1>
                <h1>{moviefound.Title} | Released {moviefound.Year}</h1>
                <p>Genre: {moviefound.Genre}</p>
                <p>Plot: {moviefound.Plot}</p>
            </div>
        </Fragment>
        
    );
}

export default MyForm;