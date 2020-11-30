import React from 'react';

const Projects = () => {
    window.addEventListener("scroll", function () {
        var Projects = document.querySelector(".Proj-container");
        if (window.pageYOffset > Projects.getBoundingClientRect().top) {
            Projects.classList.remove("hide");
            Projects.classList.remove("section-even");
        }
        else if (Projects.getBoundingClientRect().bottom < 200) {
            Projects.classList.add("hide")
            Projects.classList.add("section-even")
        }
        else{
            Projects.classList.add("hide")
            Projects.classList.add("section-even")
        }
    });
    const Websites = [
        {
            Title: "DND For You And Me",
            Description:"An application built to ease users into the creation and playing of a DND character with options for the Dungeon Master to build a campaign. Includes dice rollers, stat automation, as well as a playable mode where users can easily roll traits, attacks, and damage",
            Website:"https://dndforyouandme.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DnDForYouAndMe",
            Image:"/screen-recorder-fri-nov-13-2020-13-18-07.gif",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
        {
            Title: "Daily Affirmations",
            Description:"Using <a href='https://github.com/annthurium' target='__blank'>annthurium's</a> Affirmation API to create a small application to remind yourself of the good work you have done and that you are good enough",
            Website:"https://miccolo-daily-affirmations.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DailyAffirmations",
            Image:"/DailyAffirmations.gif",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
    ]
    const ProjectBlocks = Websites.map((val, index) => {
        const langspans = val.Languages.map((lang, index) => {
            var name = `fab fa-${lang} fa-2x`;
            return (<span className={name} key={index}></span>)
        });
        return(
        <div className="projectblock" key={index}>
            <h3>{val.Title}</h3>
            <img src={val.Image} alt={val.Title}/>
            <div>
                {langspans}  
            </div>
            <a className="Websites" href={val.Website} target="_blank" rel="noopener noreferrer">Website</a>
            <a className="Githubs" href={val.Github} target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span>Github Repo</a>
        </div>)
    })

    return (
        <div className="Proj-container hide section-even blocks">
        <h1>Projects</h1>
        <div className="Projects">
            {ProjectBlocks}
        </div>
        </div>
    );
};

export default Projects;