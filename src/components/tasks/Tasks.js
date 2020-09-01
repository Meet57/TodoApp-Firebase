import React, { useContext,Fragment } from 'react'
import { Task } from './Task'
import { TaskContext } from '../../context/TaskContext'

export const Tasks = () => {

    const {Tasks} = useContext( TaskContext )

    return (
        <Fragment>
            <table className="table table-dark container" style={{marginTop:"30px"}}>
                <thead>
                    <tr className="text-info">
                        <th scope="col-auto">Tasks</th>
                        <th scope="col-auto">Added On</th>
                        <th scope="col-1">Edit</th>
                        <th scope="col-1">Status</th>
                        <th scope="col-1">Delete</th>
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
        </Fragment>
    )
}
