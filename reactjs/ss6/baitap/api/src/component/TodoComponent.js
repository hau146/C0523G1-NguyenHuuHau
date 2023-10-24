import React, {useEffect, useState} from "react";
import * as todoService from '../service/todoService'
import {Link} from "react-router-dom";


export function TodoComponent(){
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        getAll()
    },[])
    const getAll = async () =>{
        let response = await todoService.getAll();
        setTodo(response)
    }
    return <div>
        <Link style={{color:"black"}} to="/createTodo">Create</Link>

        <h1>Todo List</h1>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>id user</th>
                <th>title</th>
                <th>completed</th>
            </tr>
            </thead>
            <tbody>
            {todo.map((todo, index) => (
                <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? "on" : "off"}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>;
}