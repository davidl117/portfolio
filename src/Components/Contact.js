import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {

    const[submitted, setSubmitted] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nx5586o', 
                         "template_7ksyypc", 
                         form.current,
                         "c201KRp5LjlfqLZok")
        .then((result) => {
         }, (error) => {
                console.log(error);
        });
        
        setSubmitted(prevSubmit => !prevSubmit)
            alert("Message Submitted")
        } 

     const styles = {
        display: submitted ? "none" : ""
    }
        
    const handleSubmit = () => {
         return (
            "Thanks! I'll be in touch ASAP!"
         )
    }

    return (
        <div id="c3" className="contact-container">
            <h1 className="contact-container-h1">{submitted ? "Thanks! I'll be in touch ASAP!": "Get in contact with me"}</h1>
            <form 
                  className="form-container"
                  ref={form}
                  onSubmit={sendEmail}
                  style={styles}
            >
                <input 
                    type="text"
                    placeholder="Name here..."
                    name="user_name"
                    required 
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <textarea 
                    placeholder="Your message here..."
                    name="message"
                    rows={7}
                    required
                />
                <input className="submit" type="submit" value="Get in Touch" onClick={handleSubmit} />
            </form>
            <div className="return-home-submit">
            {submitted ? <a href="#c1">Return to <i>Top</i></a> : ""}
            </div>
        </div>
    )
}