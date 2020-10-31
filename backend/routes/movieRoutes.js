import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { getPopularMovies, getTopRated, getLatest, getMoviePerGenre } from '../controllers/movieController.js'

router.route('/popular').get(getPopularMovies)
router.route('/toprated').get(getTopRated)
router.route('/latest').get(getLatest)
router.route('/genre/:genreId').get(getMoviePerGenre)

export default router