import React, { useEffect, useState } from "react";
import { GiHamburgerMenu, GiChecklist } from 'react-icons/gi';
import { BsTelephoneFill, BsChevronDoubleDown } from "react-icons/bs";
import './App.css';

const Design = () => {

    return (
        <>
            <div className="container-fluid background">
                <div className="row">
                    <nav className="navbar navbar-expand-lg mt-4">
                        {/* <div className="container-fluid "> */}
                            <h1 className="me-auto mx-4 text-light">Artversion</h1>
                            <div className="buttons order-lg-last mb-2">
                                <button className="btn GiChecklist text-light" type="button">
                                    <GiChecklist />
                                </button>
                                <button className="btn BsTelephoneFill text-light" type="button">
                                    <BsTelephoneFill />
                                </button>
                            </div>
                            <button className="navbar-toggler border-0 hamburger text-light mb-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <GiHamburgerMenu />
                            </button>
                            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">WEB DESIGN</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">UI/UX</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">GRAPHIC DESIGN</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">BRANDING</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-light" href="#">OUR WORKS</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-outline-light" type="submit">GET STARTED</button>
                                    </li>
                                </ul>
                            </div>
                        {/* </div> */}
                    </nav>
                </div>

                <div className="container-fluid center text-light">
                    <p className="topline">TOP RATED CREATIVE AGENCY</p>
                    <p className="bottomline"><b>We Design Experiences</b><span>TM</span></p>
                    <div className="main-circle mt-5">
                        <button className="rounded-circle border-0 fs-5 "><BsChevronDoubleDown /></button>
                    </div>
                    <h5 className="mt-5">Since 1999</h5>
                </div>
            </div>
        </>
    )
}

export default Design;
