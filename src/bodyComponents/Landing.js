import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Umbrella from "../logo/umbrella";
import Talk1 from "../logo/talk1";
import Talk2 from "../logo/talk2";

const Landing = (props) => {
    return (
        <main id="Landing">
            <section className="Intro">
                <div className="Intro-image"></div>
                <blockquote className="HELP">
                    Hi, I am Josh. I am a self-taught Web Developer working to help you reach your audience with unique, performative websites.
                </blockquote>
            </section>
            <h2 className="section-title"><u>What do I do?</u></h2>
           <section className="Unique section">
                <div className="section-text">
                <h2>Unique Websites</h2>
                <p>As a developer, I am committed to giving the audience a unique experience. Using HTML, CSS, Javascript to create an amazing look that will stand out from others.</p>
                <button className="landing-links" onClick={()=>{props.changeUrl("/Portfolio")}}>Website Examples</button> 
                </div>
                <svg className="section-image" fill="none" viewBox="0 0 1000 750">
                    <defs>
                        <style>
                            @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                        </style>
                    </defs>
                    <Umbrella handle="white" bottom="white" strokeWidth="35" beginning="translate(0 175)" color={{back:"#FFFFFF", front:"#FFFFFF"}}/>
                    <Umbrella strokeWidth="35" beginning="translate(500 175)" color={{front:"#5f9eae",back:"#afeeff"}}/>
                    <text id="vs" transform="translate(400 700)" fontFamily="Work Sans" fill="white">VS</text>
                    
                </svg>
           </section>
           <section className="Performative section">
                <svg className="section-image" fill="none" viewBox="0 0 3000 2000">
                <defs>
                        <style>
                            @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                        </style>
                </defs>
                    <rect width="3000"  height="500" fill="lightgrey" x="0" y="1000" rx="50"/>
                    <rect id="loadBar" width="0" height="400" fill="green" x="100" y="1050"/>
                    <Umbrella id="Performance" strokeWidth="35" color={{back:"#afeeff", front:"#5f9eae"}}/>
                    <text id="X" stroke="red" fill="red" x="2500" y="1450">X</text>
                    <text id="check" stroke="green" fill="green" x="2500" y="1450">&#x2713;</text>
                    <text id="before" fontFamily="Work Sans" fill="black" stroke="black" x="1300" y="250">Before</text>
                    <text id="after" fill="black" fontFamily="Work Sans" stroke="black" x="1300" y="250">After</text>
                </svg>
                <div className="section-text">
                <h2>Optimization </h2>
                <p>I push myself to build fast, well documented and performative websites that get the attention of an audience. I have effectively built backend services with nodejs and have experience in both SQL and NoSQL databases.</p>
                <button className="landing-links" onClick={()=>props.changeUrl("/Resume")}>The Technologies I Use</button>
                </div>
           </section>
           <section className="Consulting section">
                <div className="section-text">
                                <h2>Get Feedback</h2>
                <p>I am very passionate about projects and would love to discuss yours. If you are a business, entrepreneur or fellow coder looking to work out the details I would be happy to consult.</p>
                <button className="landing-links" onClick={()=>{props.changeUrl("/ContactMe")}}>Contact Me!</button>
                </div>
                <svg className="section-image" fill="none" viewBox="0 0 2000 1000">
                    <Umbrella id="talk-orange"strokeWidth="35" color={{back:"#F6C930", front:"#F5A601"}}/>
                    <Umbrella id="talk-red" strokeWidth="35" color={{back:"#F42ECA", front:"#F30752"}}/>
                    <Talk1/>
                    <Talk2 />
                </svg>
           </section>
        </main>
    );
};

export default withRouter(Landing);