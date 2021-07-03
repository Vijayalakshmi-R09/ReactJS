import React from 'react'

export default function Formdisplay(props) {
    return (
        <div>
            <header>STUDENT DETAILS</header>
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Deatails</th>
                    <th scope="col">User Input</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>First Name: </td>
                    <td>{props.data.firstname}</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Last Name</td>
                    <td>{props.data.lastname}</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>AGE:</td>
                    <td>{props.data.age}</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Gender:</td>
                    <td>{props.data.gen}</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Email ID:</td>
                    <td>{props.data.email}</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>Phone Number:</td>
                    <td>{props.data.phonenumber}</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>Phone Number:</td>
                    <td>{props.data.phonenumber}</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>Institue:</td>
                    <td>{props.data.institute}</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>Department:</td>
                    <td>{props.data.department}</td>
                    </tr>
                </tbody>
            </table>
            </div>

    )
}
