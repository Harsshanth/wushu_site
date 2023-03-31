import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <Router>
                    <div className="socialmedia footer">
                        <a href="https://www.youtube.com/@tamilnaduwushu6922" target="_blank">
                            <i className="fa-brands fa-youtube fa-xl"></i>
                        </a>

                        <a>
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </a>
                        <a href='https://instagram.com/tamilnaduwushu?igshid=YmMyMTA2M2Y='>
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </a>
                        <a href='mailto:tamilnadunwushu1@gmail.com'>
                            <i className="fa-regular fa-envelope fa-xl"></i>
                        </a>
                    </div>
                    <div className="footer-text bg-primary">
                        @ 2022 Copyright: Wushu Tamil Nadu Association 
                    </div>
                </Router>
            </footer>
        </div>
    );
}
