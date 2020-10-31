import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import userRoutes from './routes/userRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js' 

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`.yellow.bold)
)