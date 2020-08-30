import React, { useState, useEffect } from 'react';
import './Nav.css';

import logo from '../assets/netflix_logo.png';

import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Nav = () => {
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    let listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState]);

  return (
    <div className={scrollState === 'top' ? 'nav navTop' : 'nav navDef'} >
      <div className="nav__header">
        <div className="nav__headerLeft">
          <img src={logo} alt="Netflix" />
          <a href="#"><span>Home</span></a>
          <a href="#"><span>TV Shows</span></a>
          <a href="#"><span>Movies</span></a>
          <a href="#"><span>Latest</span></a>
          <a href="#"><span>My List</span></a>
        </div>

        <div className="nav__headerRight">
          <SearchIcon />
          <span>KIDS</span>
          <RedeemIcon />
          <NotificationsIcon />
        </div>
      </div>
      
    </div>
  )
}

export default Nav;