import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('state', this.state)
    }

    render() {
        return (
            <>
                <form className="container"
                    autoComplete="off"
                    style={{ marginTop: "30px" }}
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="task">Task Description</label>
                        <input type="text" className="form-control" id="task" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
            </>
        )
    }
}

export default AddTask
