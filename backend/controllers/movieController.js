import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import axios from 'axios'

// @desc      Get popular movies
// @route     GET /api/movies/popular
// @access    Private
const getPopularMovies = asyncHandler(async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_DB_BEARER}`
    }
  }
  const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`, config);

  if(results) {
    res.json(results)
  } else {
    res.status(404)
    throw new Error('No movies found')
  }
})

export { getPopularMovies }