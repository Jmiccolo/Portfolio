import React, {useState} from 'react';
import './App.css';
import Loading from "./Loading";
import Main from "./Main";

function App() {
        const [loaded, setLoaded] = useState(false);
        if(window.localStorage.FirstTime === undefined){
        return (

              <div>
              <Loading setLoaded={setLoaded} />
              <Main className="home"/>
              </div>
        )
        }else{
          return <Main className="home"/>
        } 
}

export default App;
