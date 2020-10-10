import React, { useEffect } from 'react';

const About = () => {
    window.addEventListener("scroll", function () {
        var blocks = document.querySelectorAll(".blocks");

        Array.from(blocks).forEach((block, index) =>{
        if (window.pageYOffset + 100 > block.getBoundingClientRect().top) {
            if(index % 2 === 0){
                block.classList.remove("hide")
                block.classList.remove("section-even")
            }
            else{
                block.classList.remove("hide")
                block.classList.remove("section-odd")
            }
        }
        else if (block.getBoundingClientRect().bottom < 200) {
            if (index % 2 === 0) {
                block.classList.add("hide")
                block.classList.add("section-even")
            }
            else {
                block.classList.add("hide")
                block.classList.add("section-odd")
            }
        }
        else {
            if (index % 2 === 0) {
                block.classList.add("hide")
                block.classList.add("section-even")
            }
            else {
                block.classList.add("hide")
                block.classList.add("section-odd")
            }
        }
        });
    });
    useEffect(()=>{
        setTimeout(function(){
            var blockes = document.querySelector(".glasses");
            blockes.classList.remove("hide")
            blockes.classList.remove("section")
        }, 500)
    },[])
    return (
        <div className="about-container">
            <div className="about"> 
                <div className="section glasses hide">
                    <h1>
                        Hi! My name is Josh. I am a self-taught web developer working to improve the user experience.
                    </h1>
                    <svg width="200" height="60" id="scroll">
                        <path d="M 5 5 L 100 50 L 195 5" stroke="white" fill="none" strokeWidth="2">
                            <animate attributeType="CSS" attributeName="stroke-width"
                                values="2;10;2" dur="1500ms" repeatCount="indefinite"/>
                        </path>
                    </svg>
                </div>
            </div>
            <div className="blocks section-even">
                <div className="profileImg">
                    <h1 className="top-left">"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs</h1>
                </div>
                <div className="skills">
                    <h1>Skills:</h1>
                    <span className="fab fa-html5 fa-5x"></span>
                    <span className="fab fa-css3-alt fa-5x"></span>
                    <span className="fab fa-js fa-5x"></span>
                    <span className="fab fa-node-js fa-5x"></span>
                    <span className="fab fa-react fa-5x"></span>
                    <span className="fab fa-python fa-5x"></span>
                </div>
            </div>
            <div className="section-odd blocks">
                <p>I have a passion for people. Growing up I have always worked serving people from bagging groceries in a small city in NH to serving tables in the middle of Times Square, I have built an emotional intelligence driven by the empathy and patience necessary in this type of work that is an effective segue into the needs of a client and anticipating the issues one may have in developing products for the internet. </p>
            </div>
        </div>
    );
};

export default About;