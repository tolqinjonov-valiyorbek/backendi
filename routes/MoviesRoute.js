const express = require("express");
const {
  getMovies,
  getMovieById,
  updateMovie,
  createMovie,
} = require("../controllers/MoviesCtrl");
const { authMiddleware } = require("../middlerwares/generateToken");
const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);

router.put("/:id", updateMovie);

router.post('/',authMiddleware, createMovie);


module.exports = router;
