import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {Link, useNavigate} from "react-router-dom";

export function Book() {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        let response = await bookService.getAll();
        setBook(response);
    }

    const deleteBook = async (id) => {
        // const object = {
        //     id: values.id,
        //     title: values.title,
        //     quantity: values.quantity
        // }
        console.log(id)
        let status = await bookService.deleteBook(id);
        console.log(status);
        if (status === 200) {
            getAll()
        } else {
            alert("that bai")
        }
    }

    return <div>
        <Link style={{color: "black"}} to="/createBook">Create</Link> <br/>

        <h1>Book List</h1>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {book.map((book, index) => (
                <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                        <Link style={{color: "black", margin: "0 10px"}} to={`/updateBook/${book.id}`}>Update</Link>
                        {/*<button style={{color:"black"}}*/}
                        {/*        data-bs-toggle="modal" data-bs-target="#exampleModal"*/}
                        {/*        onClick={(book) => deleteBook(book)}>*/}
                        {/*    Delete</button>*/}
                        <button onClick={(event) => deleteBook(book.id)}>DELETE</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete ?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onSubmit={deleteBook} type="button" class="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;

    function infoDelete(id, title) {
        let byId = document.getElementById(id).id;
        let byTitle = document.getElementById(title).title;
    }

}