import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <div>
        <header>Expensify App</header>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </div>
);