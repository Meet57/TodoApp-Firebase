import React, { useContext } from 'react'
import { AddTask } from '../tasks/AddTask'
import { Tasks } from '../tasks/Tasks'
import { AuthContext } from '../../context/AuthContext'
import { TaskContextProvider } from '../../context/TaskContext'
import { Redirect } from 'react-router-dom'

export const Dashboard = () => {

    const { LogOn } = useContext(AuthContext)

    if(!LogOn){
        return <Redirect to="/signin" />
    }

    return (
        <TaskContextProvider>
            <AddTask />
            <Tasks />
        </TaskContextProvider>
    )
}
