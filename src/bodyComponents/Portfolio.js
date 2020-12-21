import React from 'react';

const Portfolio = () => {
            const Websites = [
        {
            Title: "DND For You And Me",
            Description:<p>An application built to ease users into the creation and playing of a Dungeons and Dragons campaign. Built with EJS Templating, Express, and MongoDB with authentication by Passport and sessions. Soon to link with <a href="www.dnd5eapi.co">D&amp;D 5th Edition API</a></p>,
            Website:"https://dndforyouandme.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DnDForYouAndMe",
            picture:"https://lh3.googleusercontent.com/-uNYCHsBAaNLDfRdZf2AHsXLiv15M8fUrby05SVT-enjD5QThY7-Q8_krV3LFaGXbQwUxAGTtBflFka3Si0r_5kz-uUMf-4PzKhLElYVzm5YWJRoHOvNJ8HgfR_1xYz8zAz9G0Lj0g=w600-h315-p-k",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
        {
            Title: "Daily Affirmations",
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
            <h3>{val.Title}</h3>
           <img className="portfolio-image" width="100%"src={val.picture} alt={val.title}/>
               <div>
                {langspans} 
               </div> 
            <button className="min-project" onClick={minToggleModal}>Info</button>
            <a className="Websites" href={val.Website} target="_blank" rel="noopener noreferrer">Website</a>
            <a className="Githubs" href={val.Github} target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span>Github Repo</a>
            <div id={`#${val.Title.replaceAll(" ", "")}`} onClick={minToggleModal} className="modal">{val.Description}</div>
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