import React from 'react';
import logo from './images/logo.png';
import Main from './Main';
import About from './About';
import Event from './Event';
import Achivement from './Achivement';
import Gallery from './Gallery';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className="Navbar">
                <img src={logo} alt="logo" id="Navbarimg1" />

                <div>
                    <Router>
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <img src={logo} id="Navbarimg2" alt="logo" />

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarScroll"
                                    aria-controls="navbarScroll"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarScroll">
                                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                        <li className="nav-item ">
                                            <NavLink to="/" className="nav-link">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/About" className="nav-link">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Event" className="nav-link">
                                                Events
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Achievement" className="nav-link">
                                                Achievements
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/Gallery" className="nav-link">
                                                Gallery
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <Routes>
                            <Route index exact path="/" element={<Main />}></Route>
                            <Route path="/About" element={<About />}></Route>
                            <Route path="/Event" element={<Event />}></Route>
                            <Route path="/Achievement" element={<Achivement />}></Route>
                            <Route path="/Gallery" element={<Gallery />}></Route>
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}
