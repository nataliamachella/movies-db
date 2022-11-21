const express = require("express");
const router = express.Router();
const { getMovie, getMovies } = require("../controllers/moviesControllers");

router.get("/movies", getMovies);

router.get("/movies/:id", getMovie);

module.exports = router;
