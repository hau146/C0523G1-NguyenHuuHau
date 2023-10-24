import {Field, Form, Formik} from "formik";
import * as bookService from '../service/bookService'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function UpdateBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState();
    const {id} = useParams();

    useEffect(() => {
        if (id) bookById(id)
    }, [id])

    // const book = bookService.findById(id);

    const bookById =  (byId) => {
        bookService.findById(byId).then(res => {
            setBook(res)
        });
    }


    const updateBook = async (values) => {
        const object = {
            id: values.id,
            title: values.title,
            quantity: values.quantity
        }
        console.log(object.id)
        let status = await bookService.updateBook(object);
        console.log(status);
        if (status === 200){
            alert("sua thanh cong")
            navigate("/");
        } else {
            alert("that bai")
        }
    }

    if (!book) return null;

    return (
        <Formik initialValues={book} onSubmit={(values) => updateBook(values)}>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>id</label>
                    <Field
                        type='text'
                        name="id"
                        className='form-control'
                        id='studentName'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>title</label>
                    <Field
                        type='text'
                        name="title"
                        className='form-control'
                        id='studentName'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>quantity</label>
                    <Field type='text' name="quantity" className='form-control' id='studentName'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>
    )
}