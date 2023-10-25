import {useEffect, useState} from "react";
import * as bookService from '../service/bookService'
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function Book() {
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    let idDelete = -1;
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        let response = await bookService.getAll();
        setBook(response);
    }

    const deleteBook = async (id) => {
        console.log(id)
        let status = await bookService.deleteBook(id);
        console.log(status);
        if (status === 200) {
            getAll()
        } else {
            toast.error("that bai")
        }
    }

    function sendInfoToModal(id, title) {
        console.log("OK" + id);
        document.getElementById("title_delete").innerText = title;
        idDelete = id;
        console.log(idDelete + " id đã có")
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
                        <button onClick={(event) => sendInfoToModal(book.id,book.title)}
                                style={{margin: "0 0 0 5px", background: "transparent",border: "none", color:"black",fontSize:"13px"}}
                                type="button"
                                className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            DELETE
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Khách Hàng !</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" name="id_delete"/>
                        Are you sure you want to delete ? <span id="title_delete" className="text-danger"></span> ?
                        <h5 style={{color:"red",fontSize:"21px"}}>Note: This action cannot be done!</h5>
                    </div>
                    <div className="modal-footer">
                        <button style={{height:"47px"}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            data-bs-dismiss="modal"
                            onClick={(event) => deleteBook(idDelete)}
                            type="button"
                            className="btn btn-primary"
                            style={{height: "47px",width: "124px"}}
                        >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;

}