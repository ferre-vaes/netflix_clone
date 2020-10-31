import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './Row.css';

const Row = ({ title, url, altJson = false }) => {
  const [movies, setMovies] = useState([])

  const base_url = "https://image.tmdb.org/t/p/w300"

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(url)

      if (data) {
        setMovies(data)
      }
    }

    getMovies()
  }, [])

  return (
    <div className="row">
      <h2 className="row__header">{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          <img 
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`} alt={movie.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default Row;