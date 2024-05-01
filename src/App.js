import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useMotionValue } from "framer-motion"
import AllPages from './Components/AllPages/AllPages'
import Navbar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import OuterNav from './Components/NavBar/outerNav';
export const navStateContext = createContext(null)
export const handleDragContext = createContext(null)


function App() {
  const [navState, setNavState] = useState(false)

  const handleNavbar = () => {
    setNavState(true)
  }
  const toPage = () => {
    setNavState(false)
  }
  const [direction, setDirection] = useState(null)

  const prevY = useMotionValue(0);
  const handleDrag = (event, info) => {
    const deltaY = info.point.y - prevY.get();
    prevY.set(info.point.y);
    if (deltaY > 0) {
      setDirection("downwards")
    } else if (deltaY < 0) {
      setDirection("upwards")
    }
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <navStateContext.Provider value={navState}>
          <div className={navState ? 'pages nav' : 'pages'}>
            <div className={navState ? 'all nav' : 'all'}>
              <Header handleNavbar={handleNavbar} />
              <Navbar direction={direction} />
              <handleDragContext.Provider value={handleDrag}>
                <AllPages />
              </handleDragContext.Provider>
            </div>
          </div>
          <OuterNav toPage={toPage} />
        </navStateContext.Provider>
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
