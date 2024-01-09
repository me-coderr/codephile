import React, { useContext } from 'react';
import { IntroWindowContext } from '../../Context/IntroWindowContext';

const Navbar = () => {
  const { introWindowToggle } = useContext(IntroWindowContext);

  return (
    <>
      <div id="navbar-container">
        <div className='toIntroWindow'>
          <button className='toIntroWindow-btn' type="button" onClick={introWindowToggle}>Toggle Intro-Window</button>
        </div>
        <div id="brand-container">
          <h1 className="brand-name">codephile</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar;
