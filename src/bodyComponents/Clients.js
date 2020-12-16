import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Clients = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit (e) {
        e.preventDefault()
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_USER)
            .then((result) => {
                setName("");
                setEmail("");
                setMessage("");
                const success = document.createElement("div");
                success.innerText = "Thank you for your Email";
                success.style.color = "blue";
                success.style.backgroundColor = "white";
                document.querySelector(".form-container").prepend(success);     
            }, 
            (error) => {console.log(error.text);}); 
    }
    return (
        <main className="form-container">
            <h2>Contact Me</h2>
            <form id="contact" onSubmit={handleSubmit}>
                <label htmlFor="from_name">Name</label>
                <input className="form-row" value={name} type="text" required name="from_name" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="reply_to">Email</label>
                <input value={email} className="form-row" type="email" required name="reply_to" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="message">Message</label>
                <textarea value={message} className="form-row" required name="message" cols="30" rows="10" onChange= {(e) => setMessage(e.target.value)}></textarea>
                <button className="form-row-button">Submit</button>
            </form>
        </main>
    );
};

export default Clients;