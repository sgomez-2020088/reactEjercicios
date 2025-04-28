import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.css'
export const WelcomePage = () => {
    return(
        <>
            <h1>Welcome</h1>
            <Link to='/temperature'>
                <button>
                    Temperature
                </button>
            </Link>

            <Link to='/romano'>
                <button>
                    Romano
                </button>
            </Link>
        </>
    )
}