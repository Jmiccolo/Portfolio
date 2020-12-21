import React from 'react';


const Resume = () => {
    return (
                    
        <main className="resume-main">
        <h1 className="Body-Header" style={{width:"100%"}}>What I Know</h1>
            <section className="resume-section">
                <div className="resume-list">
                <h3 style={{width:"100%", textAlign:"center", color:"white", fontSize:"30px"}}>Frontend</h3>
                <span className="fab fa-html5 fa-5x"></span>
                    <span className="fab fa-css3-alt fa-5x"></span>
                    <span className="fab fa-js fa-5x"></span>
                </div>
                <div className="resume-list">
                <h4>Libraries</h4>
                <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Jquery</li>
                <li>D3</li>
                </ul>
                </div>

            </section>
            <section className="resume-section">
                <div className="resume-list">
                <h3 style={{width:"100%", textAlign:"center", color:"white", fontSize:"30px"}}>Backend</h3>
                <span className="fab fa-node-js fa-5x"></span>
                <span className="fab fa-python fa-5x"></span>
                </div>
                <div className="resume-list">
                <h4>Frameworks</h4>
                <ul>
                <li>Express</li>
                <li>Django</li>
                <li>Flask</li>
                <li>EJS</li>
                </ul>
                </div>
                <div className="resume-list">
                <h4>Databases</h4>
                <ul>
                <li>MongoDB</li>
                <li>SQLite</li>
                </ul>
                </div>
            </section>
            <section className="resume-section" style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1 className="Body-Header" style={{width:"100%"}}>Where I Learned</h1>
            <div className="resume-list">
            <h3>Colt Steele's Web Development Boot Camp 2020</h3>
            <p>Introduction to HTML5, Semantic HTML, CSS3, Javascript, ES6, Boostrap4, Express, EJS and MongoDB</p>
            </div>
            
            <div className="resume-list">
            <h3>Colt Steele - The Advanced Web Developer Bootcamp</h3>
            <p>Advanced study of HTML, CSS, and Javascript, React and D3</p>
            </div>
            
            <div className="resume-list">
            <h3>Harvard's CS50x</h3>
            <p>Intro to Computer Science, Python, C and Flask</p>
            </div>
            </section>

        </main>
    );
};

export default Resume;