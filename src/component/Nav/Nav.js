import React from 'react';
import { Link } from 'react-router-dom';

import '../Nav/Nav.css';

function Nav() {
    return (
        <div className="Nav">

            <Link to="/Player">
                <i className="fa fa-fw fa-user"></i>Player List</Link>

            <Link to="/">
                <i className="fa fa-fw fa-home"></i>Home</Link>
        </div>
    );
}

export default Nav;