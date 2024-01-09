import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import IntroWindow from './Components/Intro/IntroWindow';

// const wait = (delay) => {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Delay of 2 seconds");
//         resolve(1);
//       }, delay);
//   });
// }

const App = () => {
  return (
    <>
      <div id="topmost-container">
          <IntroWindow></IntroWindow>
          <Navbar></Navbar>
          
      </div>
    </>
  )
}

export default App;
