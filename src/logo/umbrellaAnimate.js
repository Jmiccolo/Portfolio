const animateUmbrella= ()=>{
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
}

export default animateUmbrella;