import { useState, useEffect } from 'react';
import logo from '../UMKC_Logo.png';
import {v4} from 'uuid'
import NavBar from "../navigation/NavBar";


function Account()
{
    return (
        <div className="App">
            <div> 
                <NavBar />
            </div>

            <div className="logo">
                <img src={logo} alt="UMKC" />
            </div>
        </div>
    )
}

export default Account