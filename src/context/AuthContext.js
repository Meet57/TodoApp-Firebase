import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {

    const [User, setUser] = useState(null)
    const [LogOn, setLogOn] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("LogOn")){
            setUser(JSON.parse(localStorage.getItem("User")))
            setLogOn(localStorage.getItem("LogOn"))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("User",JSON.stringify(User))
        localStorage.setItem("LogOn",LogOn)
    }, [User,LogOn])

    const SignUpFirebase = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                setUser({
                    id: data.user.uid,
                    email: data.user.email
                })
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
                setUser({
                    id: data.user.uid,
                    email: data.user.email
                })
                setLogOn(true)
            })
            .catch((error) => {
                console.log(error.code, error.message)
                alert(error.message)
            })
    }

    const SignOutFirebase = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
            setLogOn(false)
        }).catch(function (error) {
            console.log(error.code, error.message)
        });
    }

    return (
        <AuthContext.Provider
            value={{
                User,
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