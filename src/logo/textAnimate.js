const animateText = ()=> {
const text = document.querySelector("#homeText");
        text.animate([{
        transform: "translate(280px, 490px)"
    },{
        transform: "translate(280px, -2000px)"
    }], {delay:3600, duration: 1000, easing: "ease-out", fill:"forwards"})
}

export default animateText;