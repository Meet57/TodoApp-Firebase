import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    
    const [LogOn, setLogOn] = useState(false)
    
    useEffect(() => {
        if (localStorage.getItem("LogOn")) {
            setLogOn(localStorage.getItem("LogOn"))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem("LogOn", LogOn)
        if (!LogOn) {
            localStorage.removeItem("LogOn")
        }
    }, [LogOn])

    const SignUpFirebase = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                setLogOn(true)
            })
            .catch((error) => {
                console.log(error.code, error.message)
                alert(error.message)
            })

    }

    const SignInFirebase = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data) => {
                setLogOn(true)
            })
            .catch((error) => {
                console.log(error.code, error.message)
                alert(error.message)
            })
    }

    const SignOutFirebase = () => {
        firebase.auth().signOut().then(() => {
            setLogOn(false)
            localStorage.removeItem("LogOn")
        }).catch(function (error) {
            console.log(error.code, error.message)
        });
    }

    return (
        <AuthContext.Provider
            value={{
                LogOn,
                SignUpFirebase,
                SignInFirebase,
                SignOutFirebase
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}