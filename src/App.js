import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line
import Home from './Components/Home/Home'
// eslint-disable-next-line
import Works from './Components/Works/Works'
import About from './Components/About/About'
// eslint-disable-next-line
import Contact from './Components/Contact/Contact'
// eslint-disable-next-line
import Hiring from './Components/Hiring/Hiring'
import Navbar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import OuterNav from './Components/NavBar/outerNav'


function App() {
  const displaySection = (index) => {
    let sections = document.querySelectorAll('.section')
    sections.forEach((s) => {
      s.style.setProperty("transition-duration", '1s')
      s.classList.remove('show')
      s.style.setProperty("top", '10px')
      if (parseInt(s.dataset.index) === index) {
        s.classList.add('show')
        s.style.setProperty("top", '0px')
      }
    })
  }
  const handleSpan = (e, idx) => {
    let spans = document.querySelectorAll(".inner span");
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
    displaySection(idx);
  };
  const [navState, setNavState] = useState(false)

  const handleNavbar = () => {
    setNavState(true)
  }
  const toPage = () => {
    setNavState(false)
  }
  return (
    <React.Fragment>
      <div className={navState ? 'pages nav' : 'pages'}>
        <Header handleNavbar={handleNavbar} />
        <Navbar handleSpan={handleSpan} />
        <Home />
        {/* <Works />*/}
        <About />
        <Contact />
        <Hiring />
      </div>
      <OuterNav navState={navState} toPage={toPage} handleSpan={handleSpan} />
    </React.Fragment>
  );
}

export default App;
