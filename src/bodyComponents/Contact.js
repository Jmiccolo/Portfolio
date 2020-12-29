import React, {useState} from 'react';
import axios from "axios";



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    function clearForm(){
        setName("");
        setEmail("");
        setMessage("");
        }

    function handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify({"from_name":name, "reply_to":email, "message":message});
        axios({url: "https://0duco5f1l2.execute-api.us-east-1.amazonaws.com/default",
        method: 'POST', data:data, headers:{"Content-Type":"application/json"}
        })
            .then(res=>{
                if(res.status === 200){
                    setResponse({color:"blue", text:`Thank you for your Email ${name}`});
                    clearForm();
                }
                else{
                    setResponse({color:"red", text:"Sorry, something went wrong"});
                    clearForm();
                }
            })
            .catch(err=>{
                setResponse({color:"red", text:"Sorry, something went wrong"});
                clearForm();
            })
    }
    return (
        <main className="form-container">
        {response ? <h3 style={{color:response.color}}>{response.text}</h3> : null}
            <h2 className="Body-Header">Contact Me</h2>
            <form id="contact" onSubmit={handleSubmit}>
                <label htmlFor="from_name">Name</label>
                <input className="form-row" value={name} type="text" required name="from_name" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="reply_to">Email</label>
                <input value={email} className="form-row" type="email" required name="reply_to" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="message">Message</label>
                <textarea value={message} className="form-row" placeholder="Leave me a message here!" required name="message" cols="30" rows="10" onChange= {(e) => setMessage(e.target.value)}></textarea>
                <button className="form-row-button">Submit</button>
            </form>
        </main>
    );
};

export default Contact;