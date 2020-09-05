import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import { NavItems } from './NavItems'

export const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
                <Link to="/" className="navbar-brand  ml-md-5">
                    <img src={process.env.PUBLIC_URL + '/todo.png'} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                        <span className="ml-2"> Todo List</span>
                </Link>
                <NavItems  />
            </nav>
        </Fragment>
    )
}
