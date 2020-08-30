import React from 'react'

export const Task = () => {
    return (
        <>
            <tr>
                <th>React</th>
                <td>Today</td>
                <td>
                    <span className="material-icons" style={{cursor:"pointer"}}>
                        check_circle
                    </span>
                </td>
                <td>
                    <span className="material-icons text-danger" style={{cursor:"pointer"}}>
                        delete
                    </span>
                </td>
            </tr>
        </>
    )
}
