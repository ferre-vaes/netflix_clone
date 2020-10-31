import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Suggestion from './components/Suggestion';
import PopularMovies from './components/PopularMovies';

function App() {
  return (
    <div className="app">
      <Nav />
      <Suggestion />
      <PopularMovies />
    </div>
  );
}

export default App;
