import React from 'react';

const Portfolio = () => {
            const Websites = [
        {
            Title: <h3>Eloise Fine<br/>Dining Restaurant</h3>,
            Description:<p>Fine Dining Restaurant Website built in Nextjs with React and served on Vercel. Built with custom Calendar and Reservation Application and Contact Form using AWS Lambda Functions and API Gateway. </p>,
            Website:"https://fine-dining-owk2nuky7.vercel.app/",
            Github:"https://github.com/Jmiccolo/fine_dining",
            picture:"https://lh3.googleusercontent.com/pw/ACtC-3eTgNq4ORt6NlsbrlWdlKlnTvGMOySzBtRihnWQ5R0B3-El1zq9w3pIRJ8lcvdzRMoq2M5ZTHmPv5eT6Pab25n9jG4vBVrahIb2ChmTh49rLPUrOABSkEcnW8yLryakwDcslk8FmfEQMBZELiNyGftF=w1080-h575-no?authuser=0",
            Languages: ["html5", "css3-alt", "js", "react"]
        },
        {
            Title: <h3>DND For You<br/>And Me</h3>,
            Description:<p>An application built to ease users into the creation and playing of a Dungeons and Dragons campaign. Built with EJS Templating, Express and MongoDB with authentication by Passport and sessions. Soon to link with <a href="www.dnd5eapi.co">D&amp;D 5th Edition API</a></p>,
            Website:"https://dndforyouandme.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DnDForYouAndMe",
            picture:"https://lh3.googleusercontent.com/-uNYCHsBAaNLDfRdZf2AHsXLiv15M8fUrby05SVT-enjD5QThY7-Q8_krV3LFaGXbQwUxAGTtBflFka3Si0r_5kz-uUMf-4PzKhLElYVzm5YWJRoHOvNJ8HgfR_1xYz8zAz9G0Lj0g=w600-h315-p-k",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
        {
            Title: <h3>Daily<br/>Affirmations</h3>,
            Description:<p>Using <a href='https://github.com/annthurium' target='__blank'>annthurium's</a> Affirmation API to create a small application to remind yourself of the good work you have done and that you are good enough</p>,
            Website:"https://miccolo-daily-affirmations.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DailyAffirmations",
            picture:"https://lh3.googleusercontent.com/hvqga1obAmu3UngiLfOWL30w_hL_zwyG-u0O23iNQRYTw9hNYp8EKkIXAJwAXDsZZrfNVslix_F0Swt5WPeTKRup-b24RLZ-WnE6EW6k-oPV6Yn7vU_o8DxQ2MJnfrMGQNu2_QU5gw=w600-h315-p-k",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
    ];

    const toggleModal = function(e){
            const block = e.currentTarget;
            block.querySelector(".modal").classList.toggle("modal-show")
        }

    const minToggleModal = function(e){
            const block = e.currentTarget.parentNode;
            block.querySelector(".modal").classList.toggle("min-modal-show")
        }

    const ProjectBlocks = Websites.map((val, index) => {
        const langspans = val.Languages.map((lang, index) => {
        var name = `fab fa-${lang} fa-2x`;
            return (<span className={name} key={index}></span>)
        });
        return(
        <div className="projectblock" onMouseEnter={toggleModal} onMouseLeave={toggleModal} key={index}>
            {val.Title}
           <img className="portfolio-image" width="100%"src={val.picture} alt={val.title}/>
               <div>
                {langspans} 
               </div> 
            <button className="min-project" onClick={minToggleModal}>Info</button>
            <a className="Websites" href={val.Website} target="_blank" rel="noopener noreferrer">Website</a>
            <a className="Githubs" href={val.Github} target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span>Github Repo</a>
            <div onClick={minToggleModal} className="modal">{val.Description}</div>
        </div>
        )
    });
    return (
        <main>
                 <h1 className="Body-Header">Projects</h1>
        <section className="section Projects">
            {ProjectBlocks}
        </section>
        </main>
    );
};

export default Portfolio;