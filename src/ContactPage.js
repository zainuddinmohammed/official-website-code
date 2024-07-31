
import React from 'react';
import './ContactPage.css';
import './SubPage.css';
import envelope from './images/envelope_icon.png';
import {Link} from "react-router-dom";

function ContactPage() {
    return (
        <div className="sub-page">

            <div className="rectangle-header">
                <div className="text-container">
                    <h1>Contact Me!</h1>
                </div>
            </div>

            <div className="sentence">
                <p>Click the envelope below to write me an email!</p>
            </div>

            <a href="mailto:zainuddin.mohammed235@gmail.com">
                <img src={envelope} alt="envelope" className="envelope"/>
            </a>

            <div className="email">
                zainuddin.mohammed235@gmail.com
            </div>

            <Link to="/website" className="button back-to-page">
                Back to Home
            </Link>

        </div>
);
}

export default ContactPage;