import React, {useEffect}from 'react';
import Umbrella from "./umbrella";
import Text from "./text";
import createUmbrellas from './umbrellaProps'

const Container = (props) => {
    const umbrellas = createUmbrellas();
    document.querySelector("body").classList.add("overflow-hidden");
    useEffect(function(){
        const logo = document.querySelector("#homeLogo")
        logo.addEventListener("animationend", function(){
            const newHeight = document.querySelectorAll(".umbrella");
            newHeight.forEach((val, index) => {
                val.style.transition = umbrellas[index].props.transition;
                val.setAttribute("transform", umbrellas[index].props.end);
            })
            setTimeout(function(){
                    const rect = document.querySelector("#canvas");
                    rect.classList.add("remove")
                    document.querySelector("body").classList.remove("overflow-hidden")
                }, 500);
            window.localStorage.FirstTime = true;
            const canvas = document.getElementById("canvas")
            canvas.addEventListener("transitionend", function(){
                props.setLoaded(true);
            })
    });
    });
    return (
        <svg id="mainLogo" xmlns="http://www.w3.org/2000/svg" fill="none" width="100vw" height="100vh" viewBox="0 0 1000 1000">
        <rect id="canvas" height="5000" width="5000" x="-1500"  y="-1500" style={{fill:"white"}}/>
        <Umbrella id="homeLogo" color={{front:"#5f9eae",back:"#afeeff"}} strokeWidth="35" beginning="translate(125 1500) scale(0.5)"/>
        <Text className="homeText" fontSize="8em" textLength="720"/>
        {umbrellas}
        </svg>
    );
};

export default Container;