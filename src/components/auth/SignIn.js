import React, { useState, useContext, Fragment } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'

const SignIn = () => {

    const { SignInFirebase,LogOn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        SignInFirebase(email,password)
    }

    if(LogOn){
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <form className="container"
                autoComplete="off"
                style={{ marginTop: "30px" }}
                onSubmit={handleSubmit}
            >
                <legend><h4>Sign In</h4></legend>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="off"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </Fragment>        
    )
}

export default SignIn
