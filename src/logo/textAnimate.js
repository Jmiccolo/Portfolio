const animateText = ()=> {
const text = document.querySelector("#homeText");
        text.animate([{
        transform: "translate(0px, 0px)"
    },{
        transform: "translate(0px, -2000px)"
    }], {delay:3600, duration: 1000, easing: "ease-out", fill:"forwards"})
}

export default animateText;