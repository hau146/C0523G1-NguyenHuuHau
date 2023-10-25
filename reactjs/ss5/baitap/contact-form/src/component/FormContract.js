import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

export function FormContract() {
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const validateObject = {
        name: Yup.string()
            .required("required"),
        email: Yup.string()
            .required("required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email wrong format"),
        phone: Yup.string()
            .required("required"),
        message: Yup.string()
            .required("required")
    }

    const handleSubmit = (values) => {
        console.log(values);
        alert("Login in successfully!!!");
    };

    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={initValue}
                validationSchema={Yup.object(validateObject)}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                <Form>
                    <div className="col-sm-4 col-form-label">
                        <label>Name</label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"/>
                        <ErrorMessage name="name" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Email</label>
                        <Field
                            type="text"
                            name="email"
                            className="form-control"/>
                        <ErrorMessage name="email" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Phone</label>
                        <Field
                            type="text"
                            name="phone"
                            className="form-control"/>
                        <ErrorMessage name="phone" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Message</label>
                        <Field
                            type="text"
                            name="message"
                            className="form-control"/>
                        <ErrorMessage name="message" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}