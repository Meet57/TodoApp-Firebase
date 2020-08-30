import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavItems = () => {

    const { LogOn,SignOutFirebase } = useContext(AuthContext)

    return (
        LogOn ?
            <Link to="/signin" className="nav-link" onClick={SignOutFirebase}>
                Sign Out
             </Link>
            :
            <>
                <Link to="/signup" className="nav-link">
                    Sign Up
                </Link>
            </>
    )
}
