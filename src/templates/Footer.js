import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <Router>
                    <div className="socialmedia footer">
                        <a href="https://youtube.com/channel/UCFw2TiSGJhCkQq2o-1o8v7w" target="_blank">
                            <i className="fa-brands fa-youtube fa-xl"></i>
                        </a>

                        <a href="">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </a>
                        <a href=''>
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </a>
                        <a href='mailto:tamilnadunwushu1@gmail.com'>
                            <i className="fa-regular fa-envelope fa-xl"></i>
                        </a>
                    </div>
                    <div className="footer-text bg-primary">
                        {/* @ 2022 Copyright:WushuAssociation.com */}
                    </div>
                </Router>
            </footer>
        </div>
    );
}
