import React, {Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["ggg", "fsfsfs"],
            item: ''
        };
        console.log(this.props.list);
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({
                ...this.state,
                item: event.target.value
            }
        );
    }
    handleAddItem = () => {
        let item = this.state.item;
        let list = this.state.list;
        if (item !== '') {
            list.push(item);
            this.setState({
                ...this.state,
                list: [...list],
                item: ""
            })

        }
    }

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <th>Todo List</th>
                </tr>
                </thead>
                <tbody>
                {this.state.list.map(listTodo => (
                    <tr>
                        <td>{listTodo}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <input value={this.state.item} onChange={(event) => {
                this.handleChange(event);
                
            }} type="text"/>
            <button onClick={this.handleAddItem}>Add</button>
        </div>;
    }
}

export default Todo;