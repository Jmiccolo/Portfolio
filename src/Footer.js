import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <address>
                Josh Miccolo Web Designs
                joshmiccolowebdesigns@gmail.com

            </address>
             <nav className="socials">
        <a href="https://twitter.com/JoshMiccolo" target="_blank" rel="noopener noreferrer" className="fab fa-twitter fa-2x"></a>
        <a href="https://github.com/Jmiccolo" target="_blank" rel="noopener noreferrer" className="fab fa-github fa-2x"></a>
        <a href="https://www.linkedin.com/in/josh-miccolo-513b2521/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin fa-2x"></a>
      </nav>
        </footer>
    );
};

export default Footer;