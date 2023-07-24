const Movie = require("../models/MoviesModel.js");
const asyncHandler = require("express-async-handler");



const createMovie = asyncHandler(async(req, res) =>{
  try {
      const {
          name,
          desc,
          image,
          video,
      } = req.body;

      const movie = new Movie ({
        name,
        desc,
        image,
        video,
          userId: req.user._id,
      });
      if(movie) {
          const createdMovie = await movie.save()
          res.status(201).json(createdMovie);
      }else {
          res.status(400)
          throw new Error("Invalid movie data");
      }
      
  } catch (error) {
      res.status(400).json({message: error.message});
  }
});

const getMovieById = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      res.json(movie);
    } else {
      res.status(404);
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const updateMovie = asyncHandler(async(req, res) => {
    try {
        const {
          name,
          desc,
          image,
          video,
        } = req.body;

        const movie = await Movie.findById(req.params.id);
        if(movie) {
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;
            movie.image = image || movie.image;
            movie.video = video || movie.video;


            //save
            const updateMovie = await movie.save();
            res.status(201).json(updateMovie);
        }else {
            res.status(404);
            throw new Error("Movie not found")
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


const deleteMovie = asyncHandler(async (req, res) => {
  const id = req.params;
  try {
    const deleteMovie = await Product.findOneAndDelete(id);
    res.json(deleteMovie);
  } catch (error) {
    throw new Error(error);
  }
});



module.exports = {
  getMovieById,
  updateMovie,
  createMovie,
  deleteMovie
};
