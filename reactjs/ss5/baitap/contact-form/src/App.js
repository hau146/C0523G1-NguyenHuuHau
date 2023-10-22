import './App.css';
import {useState} from "react";
import {Formik} from "formik";

function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Request data!";
        }
        if (!form.email) {
            errors.email = "Request data";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Email must have format abc@gmail.com";
        }
        if (!form.phone) {
            errors.phone = "Request data";
        }
        if (!form.message) {
            errors.message = "Request data";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}/>
                            <p className="error">{errors.name}</p>
                        </div>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}/>
                            <p className="error">{errors.email}</p>
                        </div>
                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}/>
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}/>

                            <p className="error">{errors.message}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default App;
