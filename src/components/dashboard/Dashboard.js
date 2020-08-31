import React, { useContext } from 'react'
import { AddTask } from '../tasks/AddTask'
import { Tasks } from '../tasks/Tasks'
import { AuthContext } from '../../context/AuthContext'
import SignIn from '../auth/SignIn'
import { TaskContextProvider } from '../../context/TaskContext'

export const Dashboard = () => {

    const { LogOn } = useContext(AuthContext)
    

    return (
        LogOn ?
            <TaskContextProvider>
                <AddTask />
                <Tasks />
            </TaskContextProvider>
            :
            <>
                <h4 className="container text-primary mt-3">Welcome</h4>
                <hr />
                <SignIn />
            </>
    )
}
