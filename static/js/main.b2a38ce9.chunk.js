(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},34:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),a=s.n(r),c=s(17),o=s.n(c),i=s(8),l=(s(27),s(28),function(e){return Object(n.jsxs)("g",{id:e.id,className:e.className,transform:e.transform,children:[Object(n.jsx)("path",{className:"logo_handle",fill:"none",stroke:e.handle?e.handle:"brown",strokeWidth:"10",d:"M 250.00,195.00\r C 250.00,195.00 250.00,347.00 250.00,347.00"}),Object(n.jsx)("path",{className:"logo_back",fill:e.color.back,d:"M 1.00,249.00\r C 1.00,221.71 5.68,195.86 14.33,170.00\r 21.73,147.90 33.46,124.85 47.15,106.00\r 62.99,84.20 81.05,65.19 103.00,49.43\r 162.10,7.00 241.28,-8.78 312.00,8.89\r 329.26,13.21 343.97,18.84 360.00,26.48\r 423.15,56.60 473.92,114.95 491.63,183.00\r 495.97,199.69 497.07,206.01 499.14,223.00\r 499.98,228.36 500.94,239.10 499.14,244.00\r 496.10,237.44 495.62,235.16 491.08,229.00\r 462.12,189.74 399.57,185.03 361.00,212.21\r 353.82,217.27 344.10,227.24 339.90,235.00\r 337.43,239.57 336.86,244.79 334.00,249.00\r 326.90,236.48 326.80,230.48 314.91,219.29\r 283.04,189.27 227.76,187.00 193.00,213.50\r 185.45,219.26 178.95,225.62 174.31,234.00\r 174.31,234.00 167.00,250.00 167.00,250.00\r 158.31,233.48 158.59,228.64 143.00,215.30\r 112.87,189.51 63.42,188.91 31.00,210.75\r 23.09,216.07 14.34,224.80 9.45,233.00\r 9.45,233.00 1.00,249.00 1.00,249.00 Z\r M 237.00,499.00\r C 237.00,499.00 265.00,500.00 265.00,500.00\r 265.00,500.00 237.00,499.00 237.00,499.00 Z"}),Object(n.jsx)("path",{className:"logo_J",fill:"none",stroke:e.bottom?e.bottom:"black",strokeWidth:e.strokeWidth,d:"M 250.00,311.00\r C 250.00,311.00 250.00,424.00 250.00,424.00\r 250.00,500.00 167.00,500.00 167.00,424.00"}),Object(n.jsx)("path",{className:"logo_front",fill:e.color.front,d:"M 166.00,250.00\r C 162.24,234.53 171.09,202.74 175.58,187.00\r 188.31,142.33 202.75,98.14 220.00,55.00\r 220.00,55.00 239.26,12.00 239.26,12.00\r 241.33,7.99 245.62,-0.07 251.00,0.58\r 255.88,1.16 260.66,9.08 262.99,13.00\r 269.64,24.23 276.75,41.60 281.42,54.00\r 298.26,98.64 314.87,150.62 325.88,197.00\r 325.88,197.00 333.88,233.00 333.88,233.00\r 334.66,238.46 336.11,244.69 333.88,250.00\r 332.35,230.36 317.70,215.63 301.00,206.78\r 270.89,190.83 226.45,190.93 197.00,208.45\r 186.94,214.44 176.67,223.40 171.37,234.00\r 171.37,234.00 166.00,250.00 166.00,250.00 Z"})]})}),d=function(e){return Object(n.jsx)("text",{id:e.id,x:"280px",y:"490px",fontSize:e.fontSize,fill:"black",textLength:e.textLength,children:"osh Miccolo"})},j=s(21),h=function(){for(var e=[],t=[{back:"#F42ECA",front:"#F30752"},{back:"#D6FFDD",front:"#AEED90"},{back:"#F3FED2",front:"#F4CD06"},{back:"#afeeff",front:"#5f9eae"},{back:"#D627B3",front:"#820153"},{back:"#F6C930",front:"#F5A601"}],s=0;s<100;s++){var r=void 0;r=Math.random()>.25?1:-1;Math.floor(Math.random()*r*1200);var a=t[Math.floor(6*Math.random())],c="cubic-bezier(".concat(Math.random().toFixed(3),", ").concat(Math.random().toFixed(3),", ").concat(Math.random().toFixed(3),", 1)"),o={transform:"translate(0, 1500)",color:a,className:"umbrella none",transition:"transform 5s ".concat(c),id:"umbrella-".concat(s),key:s,strokeWidth:"35"};e.push(Object(n.jsx)(l,Object(j.a)({},o)))}return e},b=function(e){var t=h();return document.querySelector("body").classList.add("overflow-hidden"),Object(r.useEffect)((function(){document.querySelector("#homeText").animate([{transform:"translate(0px, 0px)"},{transform:"translate(0px, -2000px)"}],{delay:4e3,duration:1e3,easing:"ease-in-out",fill:"forwards"}),document.querySelectorAll(".umbrella").forEach((function(e){var t;t=Math.random()>.25?1:-1;var s=Math.floor(Math.random()*t*1200),n=[{transform:"translate(".concat(s,"px, 1500px)")},{transform:"translate(".concat(s,"px, -2000px)")}],r={duration:5e3,delay:5e3,easing:"cubic-bezier(".concat(Math.random().toFixed(3),", ").concat(Math.random().toFixed(3),", ").concat(Math.random().toFixed(3),", 1)"),fill:"forwards"};e.animate(n,r)})),document.querySelector("#homeLogo").addEventListener("animationend",(function(){setTimeout((function(){document.querySelector("#canvas").classList.add("remove"),document.querySelector("body").classList.remove("overflow-hidden")}),500),window.localStorage.FirstTime=!0,document.getElementById("canvas").addEventListener("transitionend",(function(){setTimeout((function(){e.setLoaded(!0)}),100)}))}))})),Object(n.jsxs)("svg",{id:"mainLogo",xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"100vw",height:"100vh",viewBox:"0 0 1000 1000",children:[Object(n.jsx)("rect",{id:"canvas",height:"5000",width:"5000",x:"-1500",y:"-1500",style:{fill:"white"}}),Object(n.jsx)(l,{id:"homeLogo",color:{front:"#5f9eae",back:"#afeeff"},strokeWidth:"35"}),Object(n.jsx)(d,{id:"homeText",fontSize:"8em",textLength:"720"}),t]})},m=function(e){return Object(n.jsx)("div",{className:"Loading",children:Object(n.jsx)(b,{setLoaded:e.setLoaded})})},f=s(7),u=s(18),x=function(){var e,t=[],s=Object(u.a)([{title:"Home",color:{front:"#5f9eae",back:"#afeeff"}},{title:"Resume",color:{back:"#D6FFDD",front:"#AEED90"}},{title:"Portfolio",color:{back:"#F3FED2",front:"#F4CD06"}},{title:"About Me",color:{back:"#F42ECA",front:"#F30752"}},{title:"Contact Me",color:{back:"#D627B3",front:"#820153"}}].entries());try{for(s.s();!(e=s.n()).done;){var r=Object(i.a)(e.value,2),a=r[0],c=r[1];t.push(Object(n.jsx)("li",{className:"nav-link",children:Object(n.jsxs)(f.b,{onClick:function(){document.querySelector("#nav-button").classList.toggle("nav-button-active"),document.querySelector(".nav-links").classList.toggle("nav-links-active")},to:"/".concat(c.title.replace(" ","")),children:[Object(n.jsx)("svg",{className:"links",width:"50px",height:"50px",stroke:"black",strokeWidth:"1px",fill:"none",viewBox:"0 0 500 500",children:Object(n.jsx)(l,{strokeWidth:"15",id:c.title,color:c.color})}),c.title]})},a))}}catch(o){s.e(o)}finally{s.f()}return Object(n.jsx)("header",{children:Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{className:"nav-header",children:[Object(n.jsx)("a",{href:"/",onClick:function(){delete window.localStorage.FirstTime},children:Object(n.jsxs)("svg",{className:"links",width:"200px",height:"50px",stroke:"black",strokeWidth:"1px",fill:"none",viewBox:"0 0 2000 500",children:[Object(n.jsx)(l,{strokeWidth:"35",id:"home",color:{front:"#5f9eae",back:"#afeeff"}}),Object(n.jsx)(d,{fontSize:"15em",textLength:"1500"})]})}),Object(n.jsx)("svg",{className:"links ",id:"nav-button",width:"50px",height:"50px",stroke:"black",strokeWidth:"1px",fill:"none",viewBox:"0 0 500 500",onClick:function(){document.querySelector("#nav-button").classList.toggle("nav-button-active"),document.querySelector(".nav-links").classList.toggle("nav-links-active")},children:Object(n.jsx)(l,{strokeWidth:"15",color:{front:"#5f9eae",back:"#afeeff"}})})]}),Object(n.jsx)("ul",{className:"nav-links",children:t})]})})},O=s(2),p=function(){return Object(n.jsx)("path",{id:"talk1",fill:"white",stroke:"black",strokeWidth:"10",d:"M 432.00,277.00\r C 432.00,277.00 358.00,234.00 358.00,234.00\r 348.11,234.02 331.70,238.65 321.00,240.58\r 321.00,240.58 270.00,246.09 270.00,246.09\r 270.00,246.09 260.00,247.00 260.00,247.00\r 217.42,247.49 179.52,244.75 138.00,234.37\r 99.85,224.83 59.03,208.34 31.00,180.00\r 7.81,156.54 -1.99,125.71 13.37,95.00\r 18.05,85.64 24.65,77.38 32.00,70.00\r 43.27,58.70 55.12,50.60 69.00,42.86\r 95.95,27.83 127.84,18.23 158.00,12.20\r 223.23,-0.84 305.58,1.06 369.00,22.00\r 400.57,32.42 432.17,46.09 456.00,70.00\r 471.74,85.79 482.25,104.23 482.00,127.00\r 481.69,154.24 462.65,177.58 442.00,193.35\r 435.20,198.54 426.50,203.95 419.00,208.14\r 416.09,209.76 408.60,212.91 407.02,215.39\r 405.34,218.03 432.00,273.26 432.00,277.00 Z"})},g=function(){return Object(n.jsx)("path",{id:"talk2",fill:"white",stroke:"black",strokeWidth:"10",d:"M 68.00,277.00\r C 68.00,277.00 142.00,234.00 142.00,234.00\r 151.89,234.02 168.30,238.65 179.00,240.58\r 179.00,240.58 230.00,246.09 230.00,246.09\r 230.00,246.09 240.00,247.00 240.00,247.00\r 282.58,247.49 320.48,244.75 362.00,234.37\r 400.15,224.83 440.97,208.34 469.00,180.00\r 492.19,156.54 501.99,125.71 486.63,95.00\r 481.95,85.64 475.35,77.38 468.00,70.00\r 456.73,58.70 444.88,50.60 431.00,42.86\r 404.05,27.83 372.16,18.23 342.00,12.20\r 276.77,-0.84 194.42,1.06 131.00,22.00\r 99.43,32.42 67.83,46.09 44.00,70.00\r 28.26,85.79 17.75,104.23 18.00,127.00\r 18.31,154.24 37.35,177.58 58.00,193.35\r 64.80,198.54 73.50,203.95 81.00,208.14\r 83.91,209.76 91.40,212.91 92.98,215.39\r 94.66,218.03 68.00,273.26 68.00,277.00 Z"})},v=function(){return Object(n.jsxs)("svg",{className:"section-image",fill:"none",viewBox:"0 0 3000 2000",children:[Object(n.jsx)("defs",{children:Object(n.jsx)("style",{children:'@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");'})}),Object(n.jsx)("rect",{width:"3000",height:"500",fill:"lightgrey",x:"0",y:"1000",rx:"50"}),Object(n.jsx)("rect",{id:"loadBar",width:"0",height:"400",fill:"green",x:"100",y:"1050"}),Object(n.jsxs)("g",{id:"Performance",children:[Object(n.jsx)("path",{className:"logo_handle",fill:"none",stroke:"brown",strokeWidth:"10",d:"M 250.00,195.00\r C 250.00,195.00 250.00,347.00 250.00,347.00"}),".",Object(n.jsx)("path",{className:"logo_back",fill:"#afeeff",d:"M 1.00,249.00\r C 1.00,221.71 5.68,195.86 14.33,170.00\r 21.73,147.90 33.46,124.85 47.15,106.00\r 62.99,84.20 81.05,65.19 103.00,49.43\r 162.10,7.00 241.28,-8.78 312.00,8.89\r 329.26,13.21 343.97,18.84 360.00,26.48\r 423.15,56.60 473.92,114.95 491.63,183.00\r 495.97,199.69 497.07,206.01 499.14,223.00\r 499.98,228.36 500.94,239.10 499.14,244.00\r 496.10,237.44 495.62,235.16 491.08,229.00\r 462.12,189.74 399.57,185.03 361.00,212.21\r 353.82,217.27 344.10,227.24 339.90,235.00\r 337.43,239.57 336.86,244.79 334.00,249.00\r 326.90,236.48 326.80,230.48 314.91,219.29\r 283.04,189.27 227.76,187.00 193.00,213.50\r 185.45,219.26 178.95,225.62 174.31,234.00\r 174.31,234.00 167.00,250.00 167.00,250.00\r 158.31,233.48 158.59,228.64 143.00,215.30\r 112.87,189.51 63.42,188.91 31.00,210.75\r 23.09,216.07 14.34,224.80 9.45,233.00\r 9.45,233.00 1.00,249.00 1.00,249.00 Z\r M 237.00,499.00\r C 237.00,499.00 265.00,500.00 265.00,500.00\r 265.00,500.00 237.00,499.00 237.00,499.00 Z"}),Object(n.jsx)("path",{className:"logo_J",fill:"none",stroke:"black",strokeWidth:"10",d:"M 250.00,311.00\r C 250.00,311.00 250.00,424.00 250.00,424.00\r 250.00,500.00 167.00,500.00 167.00,424.00"}),Object(n.jsx)("path",{className:"logo_front",fill:"#5f9eae",d:"M 166.00,250.00\r C 162.24,234.53 171.09,202.74 175.58,187.00\r 188.31,142.33 202.75,98.14 220.00,55.00\r 220.00,55.00 239.26,12.00 239.26,12.00\r 241.33,7.99 245.62,-0.07 251.00,0.58\r 255.88,1.16 260.66,9.08 262.99,13.00\r 269.64,24.23 276.75,41.60 281.42,54.00\r 298.26,98.64 314.87,150.62 325.88,197.00\r 325.88,197.00 333.88,233.00 333.88,233.00\r 334.66,238.46 336.11,244.69 333.88,250.00\r 332.35,230.36 317.70,215.63 301.00,206.78\r 270.89,190.83 226.45,190.93 197.00,208.45\r 186.94,214.44 176.67,223.40 171.37,234.00\r 171.37,234.00 166.00,250.00 166.00,250.00 Z"})]}),Object(n.jsx)("text",{id:"X",stroke:"red",fill:"red",x:"2500",y:"1450",children:"X"}),Object(n.jsx)("text",{id:"check",stroke:"green",fill:"green",x:"2500",y:"1450",children:"\u2713"}),Object(n.jsx)("text",{id:"before",fontFamily:"Work Sans",fill:"black",stroke:"black",x:"1300",y:"250",children:"Before"}),Object(n.jsx)("text",{id:"after",fill:"black",fontFamily:"Work Sans",stroke:"black",x:"1300",y:"250",children:"After"})]})},k=Object(O.f)((function(e){return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{className:"Intro",children:[Object(n.jsx)("div",{className:"Intro-image"}),Object(n.jsx)("blockquote",{className:"HELP",children:"Hi, my name is Josh. I am a self-taught Web Developer working to help you reach your audience with unique, performative websites."})]}),Object(n.jsx)("h2",{className:"Body-Header",children:Object(n.jsx)("u",{children:"What do I do?"})}),Object(n.jsxs)("section",{className:"Unique section",children:[Object(n.jsxs)("div",{className:"section-text",children:[Object(n.jsx)("h2",{children:"Creative Websites"}),Object(n.jsx)("p",{children:"As a developer, I am committed to giving the audience a unique experience. I am expereinced in using frontend technologies and frameworks to create an amazing look that will stand out from others."}),Object(n.jsx)(f.b,{className:"landing-links",to:"/Portfolio",children:Object(n.jsx)("button",{children:"Website Examples"})})]}),Object(n.jsxs)("svg",{className:"section-image",fill:"none",viewBox:"0 0 1000 750",children:[Object(n.jsx)("defs",{children:Object(n.jsx)("style",{children:'@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");'})}),Object(n.jsx)(l,{handle:"white",bottom:"white",strokeWidth:"35",beginning:"translate(0 175)",color:{back:"#FFFFFF",front:"#FFFFFF"}}),Object(n.jsx)(l,{strokeWidth:"35",beginning:"translate(500 175)",color:{front:"#5f9eae",back:"#afeeff"}}),Object(n.jsx)("text",{id:"vs",transform:"translate(400 700)",fontFamily:"Work Sans",fill:"white",children:"VS"})]})]}),Object(n.jsxs)("section",{className:"Performative section",children:[Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:"section-text",children:[Object(n.jsx)("h2",{children:"Optimization "}),Object(n.jsx)("p",{children:"I push myself to build fast, well documented and engaging websites that get the attention of an audience. I have effectively built backend services with nodejs and have experience in both SQL and NoSQL databases."}),Object(n.jsx)(f.b,{className:"landing-links",to:"/Resume",children:Object(n.jsx)("button",{children:"The Technologies I Use"})})]})]}),Object(n.jsxs)("section",{className:"Consulting section",children:[Object(n.jsxs)("div",{className:"section-text",children:[Object(n.jsx)("h2",{children:"Feedback"}),Object(n.jsx)("p",{children:"I am very passionate about projects and would love to discuss yours. If you are a business, entrepreneur or fellow coder looking to work out the details I would be happy to consult."}),Object(n.jsx)(f.b,{className:"landing-links",to:"/ContactMe",children:Object(n.jsx)("button",{children:"Contact Me"})})]}),Object(n.jsxs)("svg",{className:"section-image",fill:"none",viewBox:"0 0 2000 1000",children:[Object(n.jsx)(l,{id:"talk-orange",strokeWidth:"35",color:{back:"#F6C930",front:"#F5A601"}}),Object(n.jsx)(l,{id:"talk-red",strokeWidth:"35",color:{back:"#F42ECA",front:"#F30752"}}),Object(n.jsx)(p,{}),Object(n.jsx)(g,{})]})]})]})})),w=(s(34),function(){return Object(n.jsxs)("main",{children:[Object(n.jsx)("h2",{className:"Body-Header",children:"About Me"}),Object(n.jsxs)("section",{className:"section",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{className:"About-image",src:"https://lh3.googleusercontent.com/wOQuuvrKlv0CrIW33a1z9IajsvDGffG5uoRDPS47M5iifnQ1UP_rvff61JYUQHAHHqL-8CCgTV24lOBCUqpieYkva9ElskqvOjieHSfB_hFsHfra9XmiIEa7Cjv-3Zze_1vGJmhT7Q=w600-h315-p-k",alt:"Umbrella Skys"})}),Object(n.jsx)("p",{className:"About-text",children:"As a web developer, inspiration is what motivates me. My inspiration for this website came from a trip to Europe where I came upon Sextafeira's Umbrella Sky, a sprawling art exhibit covering the plaza of Le Village Royal in Paris. I hoped to portay the fun, adventure and whimsy I felt there in this website."})]}),Object(n.jsx)("section",{className:"section",children:Object(n.jsx)("p",{className:"About-text",children:"After attending Ithaca College and obtaining a Bachelor's in Music in Voice Performance, I have spent most of my career working in hospitality positions building a rapport with my customers and learning the soft skills necessary to be an effective member of any team."})}),Object(n.jsx)("section",{className:"section",children:Object(n.jsx)("p",{className:"About-text",children:"I first came into web development working at Carol Bushberg Real Estate as the IT Director where I spent most of my time editing the website and creating email campaigns. That small position taught me how to quickly learn new technologies and to makes decisions on what would be the best choice for a company moving forward."})})]})}),y=function(){return Object(n.jsxs)("main",{className:"resume-main",children:[Object(n.jsx)("h1",{className:"Body-Header",style:{width:"100%"},children:"What I Know"}),Object(n.jsxs)("section",{className:"resume-section",children:[Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h3",{style:{width:"100%",textAlign:"center",color:"white",fontSize:"30px"},children:"Frontend"}),Object(n.jsx)("span",{className:"fab fa-html5 fa-5x"}),Object(n.jsx)("span",{className:"fab fa-css3-alt fa-5x"}),Object(n.jsx)("span",{className:"fab fa-js fa-5x"})]}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h4",{children:"Libraries"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"Bootstrap"}),Object(n.jsx)("li",{children:"Jquery"}),Object(n.jsx)("li",{children:"D3"})]})]})]}),Object(n.jsxs)("section",{className:"resume-section",children:[Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h3",{style:{width:"100%",textAlign:"center",color:"white",fontSize:"30px"},children:"Backend"}),Object(n.jsx)("span",{className:"fab fa-node-js fa-5x"}),Object(n.jsx)("span",{className:"fab fa-python fa-5x"})]}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h4",{children:"Frameworks"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Express"}),Object(n.jsx)("li",{children:"Django"}),Object(n.jsx)("li",{children:"Flask"}),Object(n.jsx)("li",{children:"EJS"})]})]}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h4",{children:"Databases"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"MongoDB"}),Object(n.jsx)("li",{children:"SQLite"})]})]})]}),Object(n.jsxs)("section",{className:"resume-section",style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(n.jsx)("h1",{className:"Body-Header",style:{width:"100%"},children:"Where I Learned"}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h3",{children:"Colt Steele's Web Development Boot Camp 2020"}),Object(n.jsx)("p",{children:"Introduction to HTML5, Semantic HTML, CSS3, Javascript, ES6, Boostrap4, Express, EJS, MongoDB"})]}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h3",{children:"Colt Steele - The Advanced Web Developer Bootcamp"}),Object(n.jsx)("p",{children:"Advanced study of HTML, CSS, and Javascript, React, and D3"})]}),Object(n.jsxs)("div",{className:"resume-list",children:[Object(n.jsx)("h3",{children:"Harvard's CS50x"}),Object(n.jsx)("p",{children:"Intro to Computer Science, Python, C, Flask"})]})]})]})},N=function(){var e=function(e){e.currentTarget.querySelector(".modal").classList.toggle("modal-show")},t=function(e){e.currentTarget.parentNode.querySelector(".modal").classList.toggle("min-modal-show")},s=[{Title:"DND For You And Me",Description:Object(n.jsxs)("p",{children:["An application built to ease users into the creation and playing of a Dungeons and Dragons campaign. Built with EJS Templating, Express, and MongoDB with authentication by Passport and sessions. Soon to link with ",Object(n.jsx)("a",{href:"www.dnd5eapi.co",children:"D&D 5th Edition API"})]}),Website:"https://dndforyouandme.herokuapp.com/",Github:"https://github.com/Jmiccolo/DnDForYouAndMe",picture:"https://lh3.googleusercontent.com/-uNYCHsBAaNLDfRdZf2AHsXLiv15M8fUrby05SVT-enjD5QThY7-Q8_krV3LFaGXbQwUxAGTtBflFka3Si0r_5kz-uUMf-4PzKhLElYVzm5YWJRoHOvNJ8HgfR_1xYz8zAz9G0Lj0g=w600-h315-p-k",Languages:["html5","css3-alt","js","node-js"]},{Title:"Daily Affirmations",Description:Object(n.jsxs)("p",{children:["Using ",Object(n.jsx)("a",{href:"https://github.com/annthurium",target:"__blank",children:"annthurium's"})," Affirmation API to create a small application to remind yourself of the good work you have done and that you are good enough"]}),Website:"https://miccolo-daily-affirmations.herokuapp.com/",Github:"https://github.com/Jmiccolo/DailyAffirmations.PNG",picture:"https://lh3.googleusercontent.com/hvqga1obAmu3UngiLfOWL30w_hL_zwyG-u0O23iNQRYTw9hNYp8EKkIXAJwAXDsZZrfNVslix_F0Swt5WPeTKRup-b24RLZ-WnE6EW6k-oPV6Yn7vU_o8DxQ2MJnfrMGQNu2_QU5gw=w600-h315-p-k",Languages:["html5","css3-alt","js","node-js"]}].map((function(s,r){var a=s.Languages.map((function(e,t){var s="fab fa-".concat(e," fa-2x");return Object(n.jsx)("span",{className:s},t)}));return Object(n.jsxs)("div",{className:"projectblock",onMouseEnter:e,onMouseLeave:e,children:[Object(n.jsx)("h3",{children:s.Title}),Object(n.jsx)("img",{className:"portfolio-image",width:"100%",src:s.picture,alt:s.title}),Object(n.jsx)("div",{children:a}),Object(n.jsx)("button",{className:"min-project",onClick:t,children:"Info"}),Object(n.jsx)("a",{className:"Websites",href:s.Website,target:"_blank",rel:"noopener noreferrer",children:"Website"}),Object(n.jsxs)("a",{className:"Githubs",href:s.Github,target:"_blank",rel:"noopener noreferrer",children:[Object(n.jsx)("span",{className:"fab fa-github"}),"Github Repo"]}),Object(n.jsx)("div",{id:"#".concat(s.Title.replaceAll(" ","")),onClick:t,className:"modal",children:s.Description})]},r)}));return Object(n.jsxs)("main",{children:[Object(n.jsx)("h1",{className:"Body-Header",children:"Projects"}),Object(n.jsx)("section",{className:"section Projects",children:s})]})},F=s(20),S=s.n(F),C=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],d=o[1],j=Object(r.useState)(""),h=Object(i.a)(j,2),b=h[0],m=h[1];return Object(n.jsxs)("main",{className:"form-container",children:[Object(n.jsx)("h2",{className:"Body-Header",children:"Contact Me"}),Object(n.jsxs)("form",{id:"contact",onSubmit:function(e){e.preventDefault(),S.a.sendForm("service_wba615l","template_nteqzgw",e.target,"user_Fh6bdzlukiir2dy8R9S1s").then((function(e){a(""),d(""),m("");var t=document.createElement("div");t.innerText="Thank you for your Email",t.style.color="blue",t.style.backgroundColor="white",document.querySelector(".form-container").prepend(t)})).catch((function(e){var t=document.createElement("div");t.innerText="Something went wrong",t.style.color="red",t.style.fontSize="30px",document.querySelector(".form-container").prepend(t)}))},children:[Object(n.jsx)("label",{htmlFor:"from_name",children:"Name"}),Object(n.jsx)("input",{className:"form-row",value:s,type:"text",required:!0,name:"from_name",onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"reply_to",children:"Email"}),Object(n.jsx)("input",{value:l,className:"form-row",type:"email",required:!0,name:"reply_to",onChange:function(e){return d(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"message",children:"Message"}),Object(n.jsx)("textarea",{value:b,className:"form-row",placeholder:"Leave me a message here!",required:!0,name:"message",cols:"30",rows:"10",onChange:function(e){return m(e.target.value)}}),Object(n.jsx)("button",{className:"form-row-button",children:"Submit"})]})]})};var M=Object(O.f)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}),[t]);return function(){e()}}),[t]),null})),L=Object(O.f)((function(){var e=[{path:"/AboutMe",Component:w},{path:"/Resume",Component:y},{path:"/Portfolio",Component:N},{path:"/ContactMe",Component:C},{path:"/Home",Component:k}];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsxs)(O.c,{children:[e.map((function(e){var t=e.path,s=e.Component;return Object(n.jsx)(O.a,{exact:!0,path:t,children:Object(n.jsx)(s,{})},t)})),Object(n.jsx)(O.a,{exact:!0,path:"/",children:Object(n.jsx)(k,{})})]})]})})),D=(s(37),function(){return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("address",{children:["Josh Miccolo Web Designs",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"mailto:joshmiccolowebdesigns@gmail.com",children:"joshmiccolowebdesigns@gmail.com"})]}),Object(n.jsxs)("nav",{className:"socials",children:[Object(n.jsx)("a",{href:"https://twitter.com/JoshMiccolo",target:"_blank",rel:"noopener noreferrer",className:"fab fa-twitter fa-2x"}),Object(n.jsx)("a",{href:"https://github.com/Jmiccolo",target:"_blank",rel:"noopener noreferrer",className:"fab fa-github fa-2x"}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/josh-miccolo-513b2521/",target:"_blank",rel:"noopener noreferrer",className:"fab fa-linkedin fa-2x"}),Object(n.jsx)("a",{href:"/ContactMe",className:"fas fa-envelope fa-2x"})]})]})}),W=function(e){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(L,{}),Object(n.jsx)(D,{})]})})};var A=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return void 0===window.localStorage.FirstTime&&!1===s?Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{setLoaded:a}),Object(n.jsx)(W,{})]}):Object(n.jsx)(W,{})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.b2a38ce9.chunk.js.map