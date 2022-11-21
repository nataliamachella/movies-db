const Movie = require("../models/Movies");

const getMovies = (req, res) => {
  Movie.findAll()
    .then((movies) => res.send(movies))
    .catch((err) => console.log(err));
};

const getMovie = (req, res) => {
  Movie.findByPk(req.params.id)
    .then((movie) => (movie ? res.json(movie) : res.sendStatus(404)))
    .catch((err) => console.log(err));
};

module.exports = { getMovies, getMovie };
