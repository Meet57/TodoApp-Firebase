import React, { useContext } from 'react'
import { Task } from './Task'
import { TaskContext } from '../../context/TaskContext'

export const Tasks = () => {

    const {Tasks} = useContext( TaskContext )

    return (
        <>
            <table className="table table-dark container" style={{marginTop:"30px"}}>
                <thead>
                    <tr className="text-info">
                        <th scope="col">Tasks</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks.map((task)=>{
                        return(
                            <Task key={task.id} task={task} />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
