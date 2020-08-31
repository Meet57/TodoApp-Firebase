import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

export const AddTask = () => {

    const [task, setTask] = useState("")
    const { AddTaskFireBase } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        AddTaskFireBase(task)
        setTask('')
    }

    return (
        <>
            <form className="container"
                autoComplete="off"
                style={{ marginTop: "30px" }}
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="task">Task Description</label>
                    <input type="text" className="form-control" id="task" onChange={(e) => setTask(e.target.value)} value={task} />
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </>
    )
}
