import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main = (props) => {
    return (
        <div className={props.className} > 
            <Router>
                <Header/>
                <Body/>
                <Footer/>
            </Router>
        </div>
    );
};

export default Main;