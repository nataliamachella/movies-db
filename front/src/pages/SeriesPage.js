import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SeriesPage = () => {
  const [serie, setSerie] = useState([]);
  const [query, setQuery] = useState("");

  const API_URL = "https://api.themoviedb.org/3/tv/popular";
  const API_URL_SEARCH = `https://api.themoviedb.org/3/search/tv?api_key=e30a9a93aa4cdbed38f373e13824625b&query=${query}`;

  //función para traer los datos de la API
  const fetchSeries = async () => {
    const {
      data: { results },
    } = await axios.get(API_URL, {
      params: {
        api_key: "e30a9a93aa4cdbed38f373e13824625b",
      },
    });
    console.log(results);
    setSerie(results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  //función para buscar películas
  const searchSeries = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL_SEARCH);
      const data = await res.json();
      console.log(data);
      setSerie(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="container mb-5 mt-5" onSubmit={searchSeries}>
        <input
          className="mt-4"
          type="text"
          placeholder="search"
          onChange={changeHandler}
        />
        <button className="btn btn-warning">Search</button>
      </form>
      <div className="container text-center mt-5">
        <div className="row">
          {serie.map((serie) => (
            <div key={serie.id} className="col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                height={600}
                width="100%"
              />
              <h4>{serie.title}</h4>
              <p>{serie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeriesPage;
