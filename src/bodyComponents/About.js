import React from 'react';
import "./about.css";
const About = () => {
    return (
        <main>
            <h2 className="Body-Header">About Me</h2>
            <section className="section">
            <div className="image-container">
                <img className="About-image" src="https://lh3.googleusercontent.com/wOQuuvrKlv0CrIW33a1z9IajsvDGffG5uoRDPS47M5iifnQ1UP_rvff61JYUQHAHHqL-8CCgTV24lOBCUqpieYkva9ElskqvOjieHSfB_hFsHfra9XmiIEa7Cjv-3Zze_1vGJmhT7Q=w600-h315-p-k" alt="Umbrella Skys"/>
            </div>
            <p className="About-text">
                As a web developer, inspiration is what motivates me. My inspiration for this website came from a trip to Europe where I came upon Sextafeira's Umbrella Sky, a sprawling art exhibit covering the plaza of Le Village Royal in Paris. I hoped to portay the fun, adventure and whimsy I felt there in this website.
            </p>
            </section>
            <section className="section">
            <p className="About-text">
                 After attending Ithaca College and obtaining a Bachelor's in Music in Voice Performance, I have spent most of my career working in hospitality positions building a rapport with my customers and learning the soft skills necessary to be an effective member of any team.
            </p>
            </section>
            <section className="section">
            <p className="About-text">
                 I first came into web development working at Carol Bushberg Real Estate as the IT Director where I spent most of my time editing the website and creating email campaigns. That small position taught me how to quickly learn new technologies and to makes decisions on what would be the best choice for a company moving forward. 
            </p>
            </section>
        </main>
    );
};

export default About;