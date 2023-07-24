const express = require("express");
const {
  getMovieById,
  updateMovie,
  createMovie,
  deleteMovie,
} = require("../controllers/MoviesCtrl");
const { authMiddleware } = require("../middlerwares/generateToken");
const router = express.Router();

router.get("/:id", getMovieById);

router.put("/:id", updateMovie);

router.post('/',authMiddleware, createMovie);

router.delete("/:id", authMiddleware, deleteMovie);


module.exports = router;
