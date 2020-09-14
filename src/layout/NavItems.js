import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavItems = () => {

    const { LogOn, SignOutFirebase } = useContext(AuthContext)

    if (!LogOn) {
        return (
            <div className="d-flex">
                <NavLink to="/signin" activeClassName="border-bottom border-top border-primary rounded" className="nav-link">
                    Sign In
                </NavLink>
                <NavLink to="/signup" activeClassName="border-bottom border-top border-primary rounded" className="nav-link mr-md-5">
                    Sign Up
                </NavLink>
            </div>
        )
    }

    return (
        <NavLink to="/signin" className="nav-link mr-md-5" onClick={SignOutFirebase}>
            Sign Out
        </NavLink>
    )
}
