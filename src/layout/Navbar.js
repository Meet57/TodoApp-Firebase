import React from 'react'
import { Link } from 'react-router-dom'
import { NavItems } from './NavItems'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
                <Link to="/" className="navbar-brand">
                    <h3>TodoApp</h3>
                </Link>
                <NavItems />
            </nav>
        </>
    )
}
