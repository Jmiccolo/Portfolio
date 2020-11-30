import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'

const Body = () => {
    return (
        <div className="body">
            <About/>
            <Projects/>
            <Contact />  
        </div>
    );
};

export default Body;