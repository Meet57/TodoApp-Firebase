import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

export const Task = (props) => {

    const { id, addedon, task, completed } = props.task
    const { DeleteTaskFireBase,UpdateTaskFireBase } = useContext(TaskContext)

    const handleDelete = (e) => {
        DeleteTaskFireBase(id,completed)
    }

    const handleUpdate = (e) => {
        UpdateTaskFireBase(id,completed)
    }

    return (
        <>
            <tr>
                <th>{task}</th>
                <td>{addedon}</td>
                <td>
                    <span className="material-icons" onClick={handleUpdate} style={ completed ? { cursor: "pointer",color:"#51f542" } : { cursor: "pointer" }}>
                        check_circle
                    </span>
                </td>
                <td>
                    <span className="material-icons text-danger" style={{ cursor: "pointer" }} onClick={handleDelete}>
                        delete
                    </span>
                </td>
            </tr>
        </>
    )
}
