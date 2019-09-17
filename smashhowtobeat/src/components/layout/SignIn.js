import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <ul className="right">
            <li><NavLink to='/newmatchup'>New Matchup</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">AM</NavLink></li>
        </ul>
    );
}

export default SignIn;