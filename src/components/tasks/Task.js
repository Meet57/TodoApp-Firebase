import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { Modal, Button } from 'react-bootstrap'

export const Task = (props) => {

    const { id, addedon, task, completed } = props.task
    const { DeleteTaskFireBase, UpdateTaskFireBase, EditTaskFireBase } = useContext(TaskContext)

    const [show, setShow] = useState(false);

    const [EditText, setEditText] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        DeleteTaskFireBase(id, completed)
    }

    const handleUpdate = (e) => {
        UpdateTaskFireBase(id, completed)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setShow(false)
        EditTaskFireBase(id, EditText)
        setEditText('')
    }

    return (
        <>
            <tr>
                <th>{task}</th>
                <td>{addedon}</td>
                <td>
                    <span className="material-icons" style={{ color: '#66ffe1' }} variant="primary" onClick={handleShow} >
                        create
                    </span>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{task} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" 
                                className="col-12 form-control"
                                placeholder="Change To"
                                value={EditText}
                                onChange={(e)=> setEditText(e.target.value) }
                                />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                            <Button variant="primary" onClick={handleEdit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </td>
                <td>
                    <span className="material-icons" onClick={handleUpdate} style={completed ? { cursor: "pointer", color: "#51f542" } : { cursor: "pointer" }}>
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
