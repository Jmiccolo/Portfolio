import React from 'react';

const Portfolio = () => {
            const Websites = [
        {
            Title: "DND For You And Me",
            Description:"An application built to ease users into the creation and playing of a DND character with options for the Dungeon Master to build a campaign. Includes dice rollers, stat automation, as well as a playable mode where users can easily roll traits, attacks, and damage",
            Website:"https://dndforyouandme.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DnDForYouAndMe",
            Video:"491745158",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
        {
            Title: "Daily Affirmations",
            Description:"Using <a href='https://github.com/annthurium' target='__blank'>annthurium's</a> Affirmation API to create a small application to remind yourself of the good work you have done and that you are good enough",
            Website:"https://miccolo-daily-affirmations.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DailyAffirmations",
            Video:"491746084",
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
            <iframe src={`https://player.vimeo.com/video/${val.Video}?autoplay=1&&muted=1`}  frameborder="0" allow="autoplay"></iframe>
                {langspans}  
            <a className="Websites" href={val.Website} target="_blank" rel="noopener noreferrer">Website</a>
            <a className="Githubs" href={val.Github} target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span>Github Repo</a>
        </div>)
    })

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