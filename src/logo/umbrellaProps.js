import Umbrella from './umbrella';

// Create 100 umbrellas with varying colors, locations and transition times
const createUmbrellas = ()=>{
    const umbrellas = [];
    for(let i = 0;  i < 100; i++){
        const colors = [{back:"#F42ECA", front:"#F30752"}, {back:"#D6FFDD", front:"#AEED90"}, {back:"#F3FED2", front:"#F4CD06"}, {back:"#afeeff",   front:"#5f9eae"}, {back:"#D627B3", front:"#820153"}, {back:"#F6C930", front:"#F5A601"}]
        let isneg;
        if(Math.random() > 0.25){
            isneg = 1;                
        }
        else{
            isneg = -1
        }
        const x = Math.floor(Math.random()*isneg*1200)
        const beginning = `translate(${x}px, 1500px)`;
        const end = `translate(${x}px, -1500px)`;
        const color = colors[Math.floor(Math.random()*6)];
        const cubic = `cubic-bezier(${Math.random().toFixed(3)}, ${Math.random().toFixed(3)}, ${Math.random().toFixed(3)}, 1)`;
        const className = "umbrella none";
        const transition =  `transform 5s ${cubic}`;
        const id = `umbrella-${i}`
        const key = i;
        const strokeWidth = "35"
        const newprops = {beginning, end, color, className, transition, id, key, strokeWidth};
        umbrellas.push(<Umbrella {...newprops}/>)
    }
    return umbrellas;
}

export default createUmbrellas;