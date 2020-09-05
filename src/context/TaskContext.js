import React, { createContext, useState, useEffect } from 'react'
// import { AuthContext } from './AuthContext'
import firebase from '../firebase'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

    const [Tasks, setTasks] = useState([])
    // const { User } = useContext(AuthContext)
    const [User, setUser] = useState(null)
    
    firebase.auth().onAuthStateChanged((user) => {
        setUser(user)
    })

    useEffect(() => {
        if (User) {
            console.log('User', User)
            firebase.firestore()
                .collection("Users")
                .doc(User.uid)
                .collection("Tasks")
                .onSnapshot((snapshot) => {
                    const newtask = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    // console.log('newtask', newtask.length)   
                    setTasks(newtask)
                })
        }
        // eslint-disable-next-line
    }, [User])


    const AddTaskFireBase = (task) => {
        const d = new Date()
        var date = d.getDate() + "-" + (parseInt(d.getUTCMonth()) + 1).toString() + "-" + d.getFullYear()
        // console.log('Tasks', Tasks)
        const obj = {
            task,
            completed: false,
            addedon: date
        }
        firebase.firestore().collection("Users").doc(User.uid).collection("Tasks").add(obj)
    }

    const DeleteTaskFireBase = (id, completed) => {
        firebase.firestore().collection("Users").doc(User.uid).collection("Tasks").doc(id).delete()
    }

    const UpdateTaskFireBase = (id, completed) => {
        firebase.firestore().collection("Users").doc(User.uid).collection("Tasks").doc(id).update({
            completed: !completed
        })
    }

    const EditTaskFireBase = (id, edittext) => {
        firebase.firestore().collection("Users").doc(User.uid).collection("Tasks").doc(id).update({
            task: edittext
        })
    }

    return (
        <TaskContext.Provider
            value={{
                Tasks,
                AddTaskFireBase,
                DeleteTaskFireBase,
                EditTaskFireBase,
                UpdateTaskFireBase
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}