import { createContext, useState } from "react";

const IntroWindowContext = createContext();

const wait = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Delay of ${delay/1000} seconds`);
      resolve(1);
    }, delay);
  });
};

const IntroWindowProvider = (props) => {
  const [showIntroWindow, setShowIntroWindow] = useState(false);
  
  const introWindowPop = () => {
    setShowIntroWindow(true);
  }

  const introWindowUnPop = () => {
    setShowIntroWindow(false);
  }
  
  const introWindowToggle = () => {
    setShowIntroWindow(val => !val);
  }

  const checkVisited = async () => {
    const isVisited = localStorage.getItem("visited");
    if (!isVisited) {
      introWindowPop();
      await wait(10000);
      introWindowUnPop();
      localStorage.setItem("visited", true);
    }
  };


  return (
    <IntroWindowContext.Provider value={{ showIntroWindow, checkVisited, introWindowPop, introWindowUnPop, introWindowToggle }}>
      {props.children}
    </IntroWindowContext.Provider>
  );
};

export { IntroWindowContext, IntroWindowProvider };
