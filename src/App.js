import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllPages from './Components/AllPages/AllPages'
import Navbar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import OuterNav from './Components/NavBar/outerNav';
export const navStateContext = createContext(null)


function App() {
  const [navState, setNavState] = useState(false)

  const handleNavbar = () => {
    setNavState(true)
  }
  const toPage = () => {
    setNavState(false)
  }
  const [section, setSection] = useState([
    "home",
    "works",
    "about",
    "contact",
    "hiring",
  ]);
  let [index, setIndex] = useState(0);

  return (
    <React.Fragment>
      <BrowserRouter>
        <navStateContext.Provider value={navState}>
          <div className={navState ? 'pages nav' : 'pages'}>
            <div className={navState ? 'all nav' : 'all'}>
              <Header handleNavbar={handleNavbar} />
              <Navbar section={section} index={index} setIndex={setIndex} />
              <AllPages />
            </div>
          </div>
          <OuterNav toPage={toPage} setIndex={setIndex} />
        </navStateContext.Provider>
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
