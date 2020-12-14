import React from 'react';
import Umbrella from "./logo/umbrella";
import Talk1 from "./logo/talk1";
import Talk2 from "./logo/talk2";

const Body = () => {
    return (
        <main>
            <section className="Intro">
            <svg id="umbrella-container" width="0" height="0">
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="Selection">
                   <path
        fill="none"
        d="M 0.34,0.00
           C 0.35,0.00 0.35,-0.00 0.36,0.00
             0.36,0.00 0.39,0.01 0.39,0.01
             0.39,0.01 0.44,0.02 0.44,0.02
             0.50,0.02 0.53,0.02 0.59,0.01
             0.62,0.01 0.66,-0.01 0.69,0.01
             0.70,0.01 0.71,0.03 0.71,0.03
             0.71,0.03 0.75,0.08 0.75,0.08
             0.79,0.12 0.83,0.16 0.86,0.20
             0.86,0.20 0.95,0.27 0.95,0.27
             0.96,0.28 0.99,0.30 1.00,0.31
             1.00,0.31 1.00,0.33 0.99,0.33
             0.99,0.33 0.98,0.38 0.98,0.38
             0.98,0.43 0.98,0.48 0.98,0.54
             0.98,0.54 0.98,0.56 0.98,0.56
             0.98,0.56 0.99,0.66 0.99,0.66
             0.99,0.67 1.00,0.71 1.00,0.72
             1.00,0.72 0.99,0.73 0.98,0.74
             0.98,0.74 0.92,0.78 0.92,0.78
             0.88,0.82 0.82,0.88 0.78,0.92
             0.78,0.92 0.74,0.97 0.74,0.97
             0.73,0.98 0.73,0.99 0.71,1.00
             0.70,1.00 0.66,0.99 0.64,0.99
             0.58,0.98 0.54,0.98 0.48,0.98
             0.48,0.98 0.36,0.99 0.36,0.99
             0.35,0.99 0.32,1.00 0.31,1.00
             0.30,1.00 0.28,0.97 0.27,0.96
             0.25,0.93 0.22,0.89 0.19,0.86
             0.15,0.82 0.10,0.78 0.05,0.74
             0.04,0.73 0.01,0.71 0.00,0.70
             0.00,0.69 0.00,0.69 0.00,0.68
             0.00,0.68 0.01,0.61 0.01,0.61
             0.02,0.57 0.02,0.52 0.02,0.48
             0.02,0.45 0.01,0.40 0.01,0.37
             0.01,0.36 -0.00,0.33 0.00,0.32
             0.00,0.32 0.02,0.31 0.02,0.30
             0.02,0.30 0.06,0.28 0.06,0.28
             0.10,0.24 0.14,0.20 0.18,0.16
             0.22,0.13 0.25,0.09 0.28,0.06
             0.30,0.03 0.31,0.01 0.34,0.00 Z" />
                    </clipPath>
                </defs>
            </svg>
                <div className="Intro-image"></div>
                <blockquote id="HELP">
                    Websites have become the marketplace for products, businesses, personal growth and more. How is yours best serving its audience? How can I help?
                </blockquote>
            </section>
           <section className="Unique section">
                <div className="section-text">
                <h2>Set Yourself Apart</h2>
                <p>Are you using SquareSpace, Shopify, or Wordpress with a generic theme? How are you showing your audience that your product or service is unique and valuable when your using a website that isn't? As a developer I am committed to giving you a unique experience for your audience. I will build within your necessary content management service and consult with you about your best choices and how each choice will affect how you interact with your audience.</p>
                </div>
                <svg className="section-image" fill="none" viewBox="0 0 1000 1000">
                    <defs>
                        <style>
                            @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                        </style>
                    </defs>
                    <Umbrella strokeWidth="35" beginning="translate(0 250)" color={{back:"#000000", front:"#000000"}}/>
                    <Umbrella strokeWidth="35" beginning="translate(500 250)" color={{front:"#5f9eae",back:"#afeeff"}}/>
                    <text id="vs" transform="translate(400 900)" fontFamily="Work Sans" fill="white">VS</text>
                    
                </svg>
           </section>
           <section className="Performative section">
                <svg className="section-image"fill="none" viewBox="0 0 3000 3000">
                <defs>
                        <style>
                            @import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                        </style>
                </defs>
                    <rect width="3000"  height="500" fill="lightgrey" x="0" y="1500" rx="50"/>
                    <rect id="loadBar" width="0" height="400" fill="green" x="100" y="1550"/>
                    <Umbrella id="Performance" strokeWidth="35" color={{back:"#afeeff", front:"#5f9eae"}}/>
                    <text id="X" stroke="red" fill="red" x="2500" y="1950">X</text>
                    <text id="check" stroke="green" fill="green" x="2500" y="1950">&#x2713;</text>
                    <text id="before" fontFamily="Work Sans" fill="black" stroke="black" x="1300" y="750">Before</text>
                    <text id="after" fill="black" fontFamily="Work Sans" stroke="black" x="1300" y="750">After</text>
                </svg>
                <div className="section-text">
                <h2>Website Optimization</h2>
                <p>Where does your website rank in search engines? Does the quality change between desktop and mobile? How fast is your audience making it from landing page to conversion(buying a product, scheduling a meeting, signing up for newsletter, clicking an affiliate link)? I can consult you on the fixes for these problems so that you don't have to ever think about these issues again. </p>
                </div>
           </section>
           <section className="Consulting section">
                <div className="section-text">
                                <h2>Get Feedback</h2>
                <p>Having trouble deciding which content management service is best for your new project? Taking too much time trying to figure out designs for your website when every day is a lost opportunity? Allow me to consult you on what will be best for your audience and how your website can serve both you and your audience well.</p>
                </div>
                <svg className="section-image" fill="none" viewBox="0 0 2000 2000">
                    <Umbrella id="talk-orange"strokeWidth="35" beginning="translate(250 800)" color={{back:"#F6C930", front:"#F5A601"}}/>
                    <Umbrella id="talk-red" strokeWidth="35" beginning="translate(1000 800)" color={{back:"#F42ECA", front:"#F30752"}}/>
                    <Talk1/>
                    <Talk2 />
                </svg>
           </section>
           <section className="CTA">
           </section>
        </main>
    );
};

export default Body;