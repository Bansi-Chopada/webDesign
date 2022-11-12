import React, { useContext, useState } from "react";
import './Truckdesign.css';
import truck from '../images/truck.gif';
import man from '../images/man.gif';
import truckload from '../images/truckload.gif';
import { NavLink } from "react-router-dom";
import UserContext from "../context/usercontext";

const Truckdesign = () => {

    const { status } = useContext(UserContext);

    return (
        <>
            <div className="maindiv">
                <h1>Holla !!</h1>
                <h6>Your Truck is {status}</h6>
                {
                    status == 'unloaded' ?
                        <>
                            <img src={truckload} className="truck" alt="" />
                            <img src={man} className="man" alt="" />
                        </>
                        :
                        <>
                            <img src={truck} className="truck" alt="" />
                            <img src={man} className="man" alt="" />
                        </>
                }
                <NavLink to="/Truckarrow" className="lowerline">
                    Scan again to {status == 'unloaded' ? 'Load' : 'Unload'}
                </NavLink>
            </div>
        </>
    )
}

export default Truckdesign;