import {Component} from 'react'
class StudentInfo extends Component{
    render() {
        return <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            {this.props.students.map(student => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))
            }
        </table>;
    }
}
export default StudentInfo;