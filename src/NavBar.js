import React, { useEffect } from 'react';

const NavBar = () => {
    function handleNav(e) {
        e.preventDefault();
        const blockloc = document.querySelector(e.target.dataset.class);
        const navbar = document.querySelector(".navbar").getBoundingClientRect().height;
        console.log(navbar);
        window.scrollTo(0, blockloc.offsetTop-navbar);
    }
    useEffect(()=>{
        setTimeout(function(){
            var navbar = document.querySelector(".navbar")
            navbar.classList.toggle("navbar-show")
        }, 200)
    },[])
    
    function handleClick(e){
        var navbar = document.querySelector(".nav-nav")
        navbar.classList.toggle("expanded");
    }
    return (
        <div className="navbar">
            <div className="nav-home">
                <h3><a href="/">Home</a></h3>
            </div>
            <div className="nav-nav">
                <ul className="nav-links">
                    <li className="nav-link"><a href="#" data-class=".about-container" onClick={handleNav}>About Me</a></li>
                    <li className="nav-link"><a href="#" data-class=".Proj-container" onClick={handleNav}>Projects</a></li>
                    <li className="nav-link"><a href="#" data-class=".form-container" onClick={handleNav}>Contact</a></li>
                </ul>
            </div>
            <span className="nav-icon fa fa-bars fa-2x" onClick={handleClick}></span>
        </div>
    );
};

export default NavBar;