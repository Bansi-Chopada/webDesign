import React, { useContext } from "react";
import './Truckdesign.css';
import truck from '../images/truck.gif';
import truckload from '../images/truckload.gif';
import downarrow from '../images/downarrow.gif';
import uparrow from '../images/uparrow.gif';
import { useNavigate } from "react-router-dom";
import UserContext from "../context/usercontext";

const Truckarrow = () => {

    const { status, setStatus } = useContext(UserContext);

    const navigate = useNavigate();
    const onclick = () => {
        navigate('/');
        status == 'unloaded' ? setStatus('loaded') : setStatus('unloaded');
    }

    return (
        <>
            <div className="maindiv">
                {
                    status == 'unloaded' ?
                        <>
                            <img src={downarrow} className="downarrow" alt="" />
                            <img src={truckload} className="truck" alt="" />
                            <button onClick={onclick}>Load</button>
                        </>
                        :
                        <>
                            <img src={uparrow} className="downarrow" alt="" />
                            <img src={truck} className="truck" alt="" />
                            <button onClick={onclick}>Unload</button>
                        </>
                }
            </div>
        </>
    )
}

export default Truckarrow;