import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignIn = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/newmatchup'>New Matchup</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">AM</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignIn);