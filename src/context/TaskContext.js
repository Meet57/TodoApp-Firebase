import React, { createContext, useContext, useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import firebase from '../firebase'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {
    
    const [Tasks, setTasks] = useState([])
    const { User } = useContext(AuthContext)
    
    useEffect(() => {
        firebase.firestore()
        .collection("Users")
        .doc(User.id)
        .collection("Tasks")
        .onSnapshot((snapshot) => {
            const newtask = snapshot.docs.map((doc)=>({
                id : doc.id,
                ...doc.data()
            }))
            setTasks(newtask)
        })
        // eslint-disable-next-line
    }, [])
    

    const AddTaskFireBase = (task) => {
        const d = new Date()
        var date = d.getDate() + "-" + (parseInt(d.getUTCMonth()) + 1).toString() + "-" + d.getFullYear()
        console.log('Tasks', Tasks)
        const obj = {
            task,
            completed: false,
            addedon: date
        }
        firebase.firestore().collection("Users").doc(User.id).collection("Tasks").add(obj)
    }

    const DeleteTaskFireBase = (id,completed) => {
        firebase.firestore().collection("Users").doc(User.id).collection("Tasks").doc(id).delete()
    }

    const UpdateTaskFireBase = (id,completed) => {
        firebase.firestore().collection("Users").doc(User.id).collection("Tasks").doc(id).update({
            completed: !completed
        })
    }

    const EditTaskFireBase = (id,edittext) => {
        firebase.firestore().collection("Users").doc(User.id).collection("Tasks").doc(id).update({
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