import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <Router>
                    <div className="socialmedia footer">
                        <a href="https://www.facebook.com/iwufofficial/" target="_blank">
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </a>

                        <a>
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </a>
                        <a>
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </a>
                        <a>
                            <i className="fa-brands fa-linkedin-in fa-xl"></i>
                        </a>
                    </div>
                    <div className="footer-text bg-primary">
                        @ 2022 Copyright:WushuAssociation.com
                    </div>
                </Router>
            </footer>
        </div>
    );
}
