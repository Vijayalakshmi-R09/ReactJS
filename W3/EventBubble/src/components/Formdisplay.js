import React from 'react'

export default function Formdisplay(props) {
    

    return (
        <div>
            <header>STUDENT DETAILS</header>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">S.N0#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">AGE</th>
                    <th scope="col">Gender</th>
                    <th scope="col">EmailID</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Institue</th>
                    <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">1</td>
                    <td>{props.data.firstname}</td>
                    <td>{props.data.lastname}</td>
                    <td>{props.data.age}</td>
                    <td>{props.data.gen}</td>
                    <td>{props.data.email}</td>
                    <td>{props.data.phonenumber}</td>
                    <td>{props.data.institute}</td>
                    <td>{props.data.department}</td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}
