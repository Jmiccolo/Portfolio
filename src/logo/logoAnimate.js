
const animateLogo = ()=>{
const logo = document.querySelector("#homeLogo");
const logoAnimation=[
    {transform:"translate(0px, 1500px)"},
    {transform:"translate(0px, -100px)"},
    {transform: "translate(0px, 0px)"},
    {transform: "translate(0px, 0px)"},
    {transform: "translate(0px, -2000px)"}
]
const logoTiming = {
    duration: 4000,
    delay: 1000,
    easing: "ease-in-out",
    fill: "forwards"
}
logo.animate(logoAnimation, logoTiming);
}

export default animateLogo;