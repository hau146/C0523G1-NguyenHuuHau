import {useEffect} from "react";
import * as todoService from "../service/todoService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function CreateTodo(){

    const navigate = useNavigate();
    const createTodo = async (values) =>{
        const object = {
            userId: values.userId,
            title: values.title,
            completed: values.completed = +values.completed
        }
        let status = await todoService.createTodo(object);
        console.log(status)
        navigate("/")
        if (status === 201){
            toast.success("OK")
        } else {
            toast.success("False")
        }
    }

    const initValue = {
        userId: "",
        id: "",
        title: "",
        completed: false
    }
    return(
        <Formik initialValues={initValue} onSubmit={(values) => createTodo(values)}>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>userId</label>
                    <Field type='text' name="userId" className='form-control' id='studentName'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='studentName' className='form-label'>title</label>
                    <Field type='text' name="title" className='form-control' id='studentName'/>
                </div>
                <div className='mb-3'>
                    <div className="form-check form-check-inline">
                        <Field className="form-check-input" type="radio" name="completed"
                               id="inlineRadio1"
                               value="1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">On</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <Field className="form-check-input" type="radio" name="completed"
                               id="inlineRadio2"
                               value="0"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Off</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>

    )
}