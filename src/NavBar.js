import React, { useEffect } from 'react';

const NavBar = () => {
    function handleNav (e) {
        e.preventDefault();

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
                    <li className="nav-link"><a href="/" data-target="About" onClick={handleNav}>About Me</a></li>
                    <li className="nav-link"><a href="/" onClick={handleNav}>Projects</a></li>
                    <li className="nav-link"><a href="/"onClick={handleNav}>Contact</a></li>
                </ul>
            </div>
            <span className="nav-icon fa fa-bars fa-2x" onClick={handleClick}></span>
        </div>
    );
};

export default NavBar;