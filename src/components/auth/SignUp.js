import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Redirect } from 'react-router-dom'

const SignUp = () => {

    const { SignUpFirebase,LogOn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        SignUpFirebase(email,password)
    }

    return (
        !LogOn ? 
        <>
            <form className="container"
                autoComplete="off"
                style={{ marginTop: "30px" }}
                onSubmit={handleSubmit}
            >
                <legend><h4>Sign Up</h4></legend>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </>
        :
        <Redirect to="/" />
    )
}

export default SignUp
