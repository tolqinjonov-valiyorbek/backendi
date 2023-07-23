const Movie = require("../models/MoviesModel.js");
const asyncHandler = require("express-async-handler");



const getMovies = asyncHandler(async (req, res) => {
  try {
    const { time, year, search } = req.query;
    let query = {};

    if (time) {
      query.time = time;
    }
    
    if (year) {
      query.year = year;
    }
    
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }
    

    const page = Number(req.query.pageNumber) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;

    const movies = await Movie.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const count = await Movie.countDocuments(query);

    res.json({
      movies,
      page,
      pages: Math.ceil(count / limit),
      totalMovies: count,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
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
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            year,
            video,
            casts,
        } = req.body;

        const movie = await Movie.findById(req.params.id);
        if(movie) {
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;
            movie.image = image || movie.image;
            movie.titleImage = titleImage || movie.titleImage;
            movie.rate = rate || movie.rate;
            movie.numberOfReviews = numberOfReviews || movie.numberOfReviews;
            movie.category = category || movie.category;
            movie.time = time || movie.time;
            movie.year = year || movie.year;
            movie.video = video || movie.video;
            movie.casts = casts || movie.casts;


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
})


const createMovie = asyncHandler(async(req, res) =>{
    try {
        const {
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            year,
            video,
            casts,
        } = req.body;

        const movie = new Movie ({
            name,
            desc,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            year,
            video,
            casts,
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

module.exports = {
  getMovies,
  getMovieById,
  updateMovie,
  createMovie
};
