import React, {useEffect}from 'react';
import Umbrella from "./umbrella";
import Text from "./text";
import createUmbrellas from './umbrellaProps'

const Container = (props) => {
    const umbrellas = createUmbrellas();
    document.querySelector("body").classList.add("overflow-hidden");
    useEffect(function(){
        const text = document.querySelector("#homeText");
        text.animate([{
        transform: "translate(0px, 0px)"
    },{
        transform: "translate(0px, -2000px)"
    }], {delay:4000, duration: 1000, easing: "ease-in-out", fill:"forwards"});
        const umbrellaList = document.querySelectorAll(".umbrella");
        umbrellaList.forEach(umbrella => {
            let isneg;
        if(Math.random() > 0.25){
            isneg = 1;                
        }
        else{
            isneg = -1
        }
        const x = Math.floor(Math.random()*isneg*1200);
        const umbrellaAnimate = [
            {transform:`translate(${x}px, 1500px)`},
            {transform:`translate(${x}px, -2000px)`}
        ]
        const umbrellaTiming = {
            duration: 5000,
            delay: 5000,
            easing: `cubic-bezier(${Math.random().toFixed(3)}, ${Math.random().toFixed(3)}, ${Math.random().toFixed(3)}, 1)`,
            fill: "forwards"
        }
        umbrella.animate(umbrellaAnimate, umbrellaTiming);
        })
        const logo = document.querySelector("#homeLogo")
        logo.addEventListener("animationend", function(){
            setTimeout(function(){
                    const rect = document.querySelector("#canvas");
                    rect.classList.add("remove")
                    document.querySelector("body").classList.remove("overflow-hidden")
                }, 500);
            window.localStorage.FirstTime = true;
            const canvas = document.getElementById("canvas")
            canvas.addEventListener("transitionend", function(){
                setTimeout(function(){props.setLoaded(true);},100);
            })
    });
    });
    return (
        <svg id="mainLogo" xmlns="http://www.w3.org/2000/svg" fill="none" width="100vw" height="100vh" viewBox="0 0 1000 1000">
        <rect id="canvas" height="5000" width="5000" x="-1500"  y="-1500" style={{fill:"white"}}/>
        <Umbrella id="homeLogo" color={{front:"#5f9eae",back:"#afeeff"}} strokeWidth="35"/>
        <Text id="homeText" fontSize="8em" textLength="720"/>
        {umbrellas}
        </svg>
    );
};

export default Container;