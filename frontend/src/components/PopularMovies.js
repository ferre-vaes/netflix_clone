import React, { useState, useEffect } from 'react';
import './PopularMovies.css';
import axios from 'axios';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      const data = await axios(
        'https://api.themoviedb.org/3/movie/popular?api_key=22a949f21c0f98dd58bf28235fc286b6&language=en-US&page=1',
      );
 
      setMovies(data.data.results);
      console.log(data.data.results);
    };
    
    fetchMovies();
    console.log(movies);
  }, []);

  return (
    <div className="popular__cardList">
      
    </div>
  );
};

export default PopularMovies;