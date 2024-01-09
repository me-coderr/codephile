import React, { useContext, useEffect } from 'react'
import { IntroWindowContext } from '../../Context/IntroWindowContext';

const Intro = () => {
  const {showIntroWindow, checkVisited} = useContext(IntroWindowContext);

  useEffect(() => {checkVisited(); console.log(showIntroWindow);}, [showIntroWindow]);

  return (
    <>
      {
        showIntroWindow ?
        <h1>Intro Window</h1> :
        <></>
      }
    </>
  )
}

export default Intro;
