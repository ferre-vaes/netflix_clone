import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { getPopularMovies } from '../controllers/movieController.js'

router.route('/popular').get(protect, getPopularMovies)

export default router