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

// @desc      Get latest movies
// @route     GET /api/movies/latest
// @access    Private
const getLatest = asyncHandler(async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_DB_BEARER}`
    }
  }
  const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`, config);

  if(results) {
    res.json(results)
  } else {
    res.status(404)
    throw new Error('No movies found')
  }
})

// @desc      Get top rated movies
// @route     GET /api/movies/top_rated
// @access    Private
const getTopRated = asyncHandler(async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_DB_BEARER}`
    }
  }
  const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`, config);

  if(results) {
    res.json(results)
  } else {
    res.status(404)
    throw new Error('No movies found')
  }
})

// @desc      Get movies per genre
// @route     GET /api/movies/genre/:id
// @access    Private
const getMoviePerGenre = asyncHandler(async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_DB_BEARER}`
    }
  }

  console.log(req.params.genreId)
  const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${req.params.genreId}`, config);

  if(results) {
    res.json(results)
  } else {
    res.status(404)
    throw new Error('No movies found')
  }
})

export { getPopularMovies, getTopRated, getLatest, getMoviePerGenre }