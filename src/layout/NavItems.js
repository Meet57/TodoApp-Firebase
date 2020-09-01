import React, { useContext  } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavItems = () => {

    const { LogOn, SignOutFirebase } = useContext(AuthContext)

    if (!LogOn) {
        return (
            <div className="d-flex">
                <Link to="/signin" className="nav-link">
                    Sign In
                </Link>
                <Link to="/signup" className="nav-link mr-md-5">
                    Sign Up
                </Link>
            </div>
        )
    }

    return (
        <Link to="/signin" className="nav-link mr-md-5" onClick={SignOutFirebase}>
            Sign Out
        </Link>

    )
}
