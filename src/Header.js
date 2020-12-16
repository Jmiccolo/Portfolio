import React from 'react';
import {Link} from 'react-router-dom';
import Umbrella from './logo/umbrella';
import Text from './logo/text';

const Header = () => {
    const links = []
    const linkgroups = [{title:"Home", color:{front:"#5f9eae", back:"#afeeff"}}, {title:"Resume", color:{back:"#D6FFDD", front:"#AEED90"}}, {title:"Portfolio", color:{back:"#F3FED2", front:"#F4CD06"}}, {title:"About Me", color:{back:"#F42ECA", front:"#F30752"}}, {title:"Contact Me", color:{back:"#D627B3", front:"#820153"}}]
    for(let [i, link] of linkgroups.entries()){
        links.push(<li key={i} className="nav-link">
                    <Link onClick={()=>{document.querySelector("#nav-button").classList.toggle("nav-button-active");
                document.querySelector(".nav-links").classList.toggle("nav-links-active")}}to={`/${link.title.replace(" ", "")}`}>
                        <svg className="links" width="50px" height="50px" stroke="black" strokeWidth="1px" fill="none" viewBox="0 0 500 500">
                                <Umbrella strokeWidth="15" id={link.title} color={link.color}/>   
                        </svg>
                            {link.title}
                        </Link>
                    </li>)
    }
    return (
        <header>
            <nav>
            <div className="nav-header">
            <a href="/" onClick={()=> {delete window.localStorage.FirstTime}}>
                <svg className="links" width="200px" height="50px" stroke="black" strokeWidth="1px" fill="none" viewBox= "0 0 2000 500">
                    <Umbrella strokeWidth="35" id="home" color={{front:"#5f9eae",back:"#afeeff"}} />
                    <Text fontSize="15em" textLength="1500"/>
                </svg>
            </a>
            <svg className="links " id="nav-button" width="50px" height="50px" stroke="black" strokeWidth="1px" fill="none" viewBox="0 0 500 500" onClick={()=>{
                document.querySelector("#nav-button").classList.toggle("nav-button-active");
                document.querySelector(".nav-links").classList.toggle("nav-links-active")}
                }
            >
                    <Umbrella strokeWidth="15" color={{front:"#5f9eae",back:"#afeeff"}}/>   
            </svg>
            </div>
            <ul className="nav-links">
                {links}
            </ul>
            </nav>
        </header>
    );
};

export default Header;