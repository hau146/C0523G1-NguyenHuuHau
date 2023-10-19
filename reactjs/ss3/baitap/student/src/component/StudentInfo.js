import {Component} from 'react'

class StudentInfo extends Component {
    render() {
        return <table>
            <tr>
                <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                </thead>
            </tr>
            <tbody>
            {this.props.students.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))
            }
            </tbody>
        </table>;
    }
}

export default StudentInfo;