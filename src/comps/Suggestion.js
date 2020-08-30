import React from 'react';
import './Suggestion.css';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import notebook_title from '../assets/notebook_title.png';

const Suggestion = () => {
  return(
    <div className="suggestion">
      <div className="suggestion__vignette"></div>
      <div className="suggestion__info">
        <img src={notebook_title} alt="The Notebook" />
        <span>
          An ill-fated 1940s love affair is retold through the pages of an eldery woman's diary. Hankies required.
        </span>
        <div className="suggestion__infoButtons">
          <button className="playButton">
            <PlayArrowIcon /> Play
          </button>
          <button className="infoButton">
            <InfoOutlinedIcon /> Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Suggestion;