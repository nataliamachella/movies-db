import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const API_URL = "https://api.themoviedb.org/3/movie/popular";
  const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=e30a9a93aa4cdbed38f373e13824625b&query=${query}`;

  //función para traer los datos de la API
  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(API_URL, {
      params: {
        api_key: "e30a9a93aa4cdbed38f373e13824625b",
      },
    });
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //función para buscar películas
  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL_SEARCH);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="container mb-5 mt-5" onSubmit={searchMovies}>
        <input
          className="mt-4"
          type="text"
          placeholder="search"
          onChange={handleChange}
        />
        <button className="btn btn-warning">Search</button>
      </form>
      <div className="container text-center mt-5">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                height={600}
                width="100%"
              />
              <h4>{movie.title}</h4>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
