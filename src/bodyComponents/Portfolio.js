import React from 'react';

const Portfolio = () => {
            const Websites = [
        {
            Title: "DND For You And Me",
            Description:"An application built to ease users into the creation and playing of a DND character with options for the Dungeon Master to build a campaign. Includes dice rollers, stat automation, as well as a playable mode where users can easily roll traits, attacks, and damage",
            Website:"https://dndforyouandme.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DnDForYouAndMe",
            picture:"https://lh3.googleusercontent.com/gdNs9-8zpu7zHPdA9GDrYSws7NXkDhbOEE0alBH9iwhCQDJLXlAmMy0MpOUhycr-WhEHfP0obtrmKaFova8m9OAsqAws1Fzas6OC55_hlg9m9MYtBUc491x49q-ggVtNmRnv2aVhxO98oeMPl4BkV-g5dZAX1h3gSDzoF3ZjcI_ZKneJjHClG8RAKsKFgTPi2oVAJpnerjqJMwZa81ydtswxs26FRIopona6S8OIiBx_gN6BkZueGUQS1JBBYsBZxuDNe92EPhnRLNVrRV9dOAjxLZpEwGZDEnofWwVUm-0CXqnKblXQo36tRqrWt5elHgJ11K3suBIUBadl_ZIBKID6bwHoGlSoCzidkU4VugquM6QA0xEn63kMKc8WKrnCNRn3d7nc9qAIBZbr19dzbLZRyVrTQL5Wylf-U4m_n4v3LW1huDqn6ELyEvYcTMJLv_ZY3DGG5L8vDjX-VEtvmAGhq1Cb2AjD-7XQn-3OMNBHG__KkI9SNrNxhEcR3RkTtDV6QIynMeWczR2M5zOyaZifVcoI4itS6g0Ivp_62AKoGHskE_hIBVcCV6aXHT9dMWFS402i7Rc4rR25JcOJa1vVMqm9uPw1iHMwojgaiEO_YU0br2Qjyf21wfL3qrdcMC55Xt0ICaHuo2eCaZq8Qe7mFH9lnq6DL6pYRgXkHmLe_Jdq8RPlD9p3F7Vx=w1437-h737-no?authuser=0",
            Languages: ["html5", "css3-alt", "js", "node-js"]
        },
        {
            Title: "Daily Affirmations",
            Description:"Using <a href='https://github.com/annthurium' target='__blank'>annthurium's</a> Affirmation API to create a small application to remind yourself of the good work you have done and that you are good enough",
            Website:"https://miccolo-daily-affirmations.herokuapp.com/",
            Github:"https://github.com/Jmiccolo/DailyAffirmations.PNG",
            picture:"https://lh3.googleusercontent.com/ckNcY3vW1L6Y8qGGXEgY4UGXag9NlNIJR3yTnN8hc_KS6wSeSGDJ5ddRJhNgpYs2W7hTPHLId6lt2EMNugk4Wekb_PLEhHVOC8ArhEkdRYXcRJMTKM-XwMaSQdyY4u1yY0EOOHC2Ev2u96AvxAsUNiT5c5-YoHmXUpsIoAmqXx3uUuAuKSl6y7Q57PtEVCoRiK3wAcL_rkkyxZQ-x-42vLPRvaOVLwe3-OeJuLLkDJVn4ET_ikq3iW4pKCOdUzsuNLnSWnJKOS2SbIfe8Fv8DVM7_n73R7QEIODm3h1gnlQTjAZ8InSY2Nd9Sh66VIuG6RIZ93YoK6VorJpaoEh8NK-pLRqhlU-ijOUf2YqGaQw5rdTcfZ8iMTDLXHWfj-vmkWGaruGGxAPbCIPKwSZr-VtDeCgaP32dA3QfDljsBn6evmduFziqepOc5QHd2zXcpZN_53RY9hStuKcy3In7bW6DStjDudY5sRWNu6Tqqmcq0Kuuk9UqxTMwAwljKIDY9NcCQilLSlO3mar_v1sNpOKIuMsxwVJtEVMh4BX6RgdH5aibtmbNFE_Ezyc0d1_NoXLtxwnSSLkY6svyx493MWkYRXRO02OWtrauXQWI9YYS4SmJc7HN_S07RYnIxDMTUUoCQBD-4F3jQ38lllWnYzrEq_6_1eqlp0Fda7f9BJclpTP-WoCtRWErz7ZC=w1424-h754-no?authuser=0",
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
           <img className="portfolio-image" width="100%"src={val.picture} alt={val.title}/>
               <div>
                {langspans} 
               </div> 
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