import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Suggestion from './components/Suggestion';
import Row from './components/Row';

import { requests } from './utils/requests'

function App() {
  return (
    <div className="app">
      <Nav />
      <Suggestion />
      {
        requests.map(request => (
          <Row title={request.title} url={request.url}/>
        ))
      }
    </div>
  );
}

export default App;
