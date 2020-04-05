import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = (props) => (
    <div>
        <header>Expensify App</header>
        <nav>
            <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            <button onClick={props.startLogout}>Logout</button>
        </nav>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);