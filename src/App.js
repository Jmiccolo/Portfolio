import React, {useEffect, useState} from 'react';
import "./App.css";
import Main from "./Main"

const App = () => {
  const [hide, setHide] = useState("hide");
  const [main, setMain] = useState(null);
  useEffect(()=>{
    var letters = document.querySelectorAll(".letter");
    for(let i=0; i < letters.length; i++){
      let letter = letters[i];
      setTimeout(function(){
        letter.setAttribute("stroke-dashoffset", 0);
      }, i*250);
    }
    setTimeout(function(){
      setHide("show");
    }, 2750)
    setTimeout(function(){
      var container = document.querySelector(".container")
      container.classList.add("container-navbar");
      var title = document.getElementById("title");
      title.remove();
      var line = document.getElementById("line")
      setTimeout(function(){
        line.setAttribute("stroke-dashoffset", 0);
        setMain(<Main />)
      }, 1000);
    }, 5000)

  },[]);
  return (
      <div className="container">
      <div id="container">
        <svg viewBox="0 0 500 70">
          <path d="M 40 5 L 40 5 L 40 35 L 20 35 L 20 25" strokeDashoffset="60" strokeDasharray="60" className="letter" />
          <path d="M 60 5 L 60 5 L 80 5 L 80 35 L 60 35 L 60 5" strokeDashoffset="100" strokeDasharray="100" className="letter" />
          <path d="M 120 5 L 120 5 L 100 5 L 100 20 L 120 20 L 120 35 L 100 35" strokeDashoffset="90" strokeDasharray="90" className="letter" />
          <path d="M 140 5 L 140 40 L140 20 L 160 20 L 160 0 L 160 35" strokeDashoffset="140" strokeDasharray="140" className="letter" />
          <path d="M 210 35 L 210 35 L 210 5 L 225 20 L 240 5 L 240 35" strokeDashoffset="103" strokeDasharray="103" className="letter" />
          <path d="M 260 5 L 285 5 L270 5 L 270 35 L 255 35 L 280 35" strokeDashoffset="123" strokeDasharray="123" className="letter" />
          <path d="M 320 5 L 320 5 L 300 5 L 300 35 L 320 35" strokeDashoffset="70" strokeDasharray="70" className="letter" />
          <path d="M 360 5 L 360 5 L 340 5 L 340 35 L 360 35" strokeDashoffset="70" strokeDasharray="70" className="letter" />
          <path d="M 380 5 L 380 5 L 400 5 L 400 35 L 380 35 L 380 5" strokeDashoffset="100" strokeDasharray="100" className="letter" />
          <path d="M 420 5 L 420 35 L 440 35" strokeDashoffset="50" strokeDasharray="50" className="letter" />
          <path d="M 460 5 L 460 5 L 480 5 L 480 35 L 460 35 L 460 5" strokeDashoffset="100" strokeDasharray="100" className="letter" />
          <path d="M 0 55 L 0 55 L 500 55" stroke="#606060" strokeWidth="10px" strokeDashoffset="500" strokeDasharray="500" id="line" />
        </svg>
        </div>
        <h1 className={hide} id="title">WEB DEVELOPER</h1>
      {main}
      <div className="socials">
        <a href="https://twitter.com/JoshMiccolo" target="_blank" rel="noopener noreferrer" className="fab fa-twitter fa-2x"></a>
        <a href="https://github.com/Jmiccolo" target="_blank" rel="noopener noreferrer" className="fab fa-github fa-2x"></a>
        <a href="https://www.linkedin.com/in/josh-miccolo-513b2521/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin fa-2x"></a>
      </div>
      </div>
  );
};

export default App;