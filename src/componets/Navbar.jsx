import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/tareas">tareas</Link>
                </li>
                <li>
                    <Link to="/enprogreso">enprogreso</Link>
                </li>
                <li>
                    <Link to="/realizadas">realizadas</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;