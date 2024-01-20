import React, { useContext, useEffect } from 'react';
import { IntroWindowContext } from '../../Context/IntroWindowContext';
import './IntroWindow.css';
const Intro = () => {
  const {showIntroWindow, checkVisited, introWindowUnPop} = useContext(IntroWindowContext);

  useEffect(() => {checkVisited(); console.log(showIntroWindow);}, [showIntroWindow]);

  return (
    <>
      {
        !showIntroWindow ?
        <></> :
          <div className='intro-window-container'>
            <h1>Intro Window</h1>
            <button type="button" className='close-intro-window-btn' onClick={introWindowUnPop}>x</button>
          </div>
      }
    </>
  );
}

export default Intro;
