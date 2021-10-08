import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import React from "react";

const Navbar = ({ show }) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul>
                <li>
                    <Link to="/" className="active">
                        <AiOutlineHome />Home
                    </Link>
                </li>
                <li>
                    <Link to="/teste" className="active">
                    teste
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;