import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllPages from './Components/AllPages/AllPages'
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
  const getTheIndex = (idx, output) => {
    let spans = document.querySelectorAll(".inner span");
    spans.forEach((sp) => {
      const id =
        sp.className === "active" ? parseInt(sp.dataset.index) + 1 : "";
      return idx === id ? output = 'line' : '';
    });
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header handleNavbar={handleNavbar} getTheIndex={getTheIndex} />
        <Navbar handleSpan={handleSpan} />
        <div className={navState ? 'pages nav' : 'pages'}>
          <AllPages navState={navState} />
        </div>
        <OuterNav navState={navState} toPage={toPage} handleSpan={handleSpan} getTheIndex={getTheIndex} />
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
