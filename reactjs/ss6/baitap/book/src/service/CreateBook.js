import {Field, Form, Formik} from "formik";
import * as bookService from '../service/bookService'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function CreateBook() {
    const navigate = useNavigate();


    const initValue = {
        id: "",
        title: "",
        quantity: ""
    }

    const createBook = async (values) => {
        const object = {
            title: values.title,
            quantity: values.quantity
        }
        let status = await bookService.createBook(object);
        console.log(status);
        if (status === 201){
            toast.success("them thanh cong")
        } else {
            toast.error("that bai")
        }
        navigate("/");
    }

    return (
        <Formik initialValues={initValue} onSubmit={(values) => createBook(values)}>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>title</label>
                    <Field type='text' name="title" className='form-control' id='studentName'/>
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