import React, {useEffect}from 'react';
import Umbrella from "./umbrella";
import Text from "./text";
import createUmbrellas from './umbrellaProps';
import animateLogo from "./logoAnimate";
import animateText from "./textAnimate";
import animateUmbrella from "./umbrellaAnimate";

const Container = (props) => {
    const umbrellas = createUmbrellas();
    document.querySelector("body").classList.add("overflow-hidden");
    useEffect(function(){
        const addRemove = setTimeout(function(){
        document.querySelector('#canvas').classList.add("remove");
    }, 5000);
        const clearAnimations = setTimeout(function(){
                document.querySelector("body").classList.remove("overflow-hidden");
                window.localStorage.FirstTime = true;
                document.querySelector("#mainLogo").remove();
                setTimeout(function(){
                    props.setLoaded(true);
                }, 100)
            }, 9000);
        animateLogo();
        animateText();
        animateUmbrella();
        document.querySelector("#mainLogo").addEventListener("click", function(){
            window.localStorage.FirstTime = true;
            clearTimeout(clearAnimations);
            clearTimeout(addRemove);
            document.querySelector("body").classList.remove("overflow-hidden");
            setTimeout(function(){
                props.setLoaded(true);
            }, 100);
        })
    });
    return (
        <svg id="mainLogo" xmlns="http://www.w3.org/2000/svg" fill="none" width="100vw" height="100vh" viewBox="0 0 1000 1000">
        <rect id="canvas" height="5000" width="5000" x="-1500"  y="-1500" style={{fill:"white"}}/>
        <Umbrella id="homeLogo" color={{front:"#5f9eae",back:"#afeeff"}} transform="translate(120, 1500)" strokeWidth="35"/>
        <Text id="homeText" fontSize="8em" textLength="720px"/>
        {umbrellas}
        </svg>
    );
};

export default Container;