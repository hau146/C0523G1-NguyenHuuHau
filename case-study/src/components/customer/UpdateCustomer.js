import {Link, useNavigate, useParams} from "react-router-dom";
import '../css/customer.css'
import '../css/validate.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"
import * as customerService from '../../service/customer/customer_service'
import {useEffect, useState} from "react";

function UpdateCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [typeCustomer, setTypeCustomer] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        if (id) customerById(id);
        getAllTypeCustomer()
    }, [id]);


    const customerById = (id) => {
        console.log(id)
        customerService.findById(id).then(res => {
            res.gender = res.gender + "";
            console.log(res)
            res.typeCustomer = JSON.stringify(res.typeCustomer);
            setCustomer(res);
        })
    }

    const getAllTypeCustomer = async () => {
        let data = await  customerService.getAllTypeCustomer();
        setTypeCustomer(data);
    }


    const validateObject = {
        name: Yup.string()
            .required("Tên khách hàng không được để trống !"),
        date: Yup.date()
            .required("Ngày sinh khách hàng không được để trống"),
        idCard: Yup.string()
            .required("CMND không được để trống")
            .length(12, "CMND phải đủ và không đuợc quá 12 số"),
        numberPhone: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(/^(?:\(\d+\)\+)?(09[01]\d{7}|(84)\+09[01]\d{9})$/,"số điện thoại phải bắt đầu từ số 0 hoặc (+84)"),
        email: Yup.string()
            .required("Email không được để trống !")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email sai định dạng"),
        address: Yup.string()
            .required("Địa chỉ không được để trống !"),
        gender: Yup.string()
            .min(0, "Giới tính không được bỏ trống !")
    }

    const updateCustomer = async (values) => {
        const data = {...values, typeCustomer: JSON.parse(values.typeCustomer)}
        console.log(data)
        let status = await customerService.updateCustomer(data);
        if (status === 200) {
            toast.success(`Sửa thông tin khách hàng ${values.name} thành công !`);
            navigate("/customer");
        } else {
            toast.warning("Sửa thất bại !")
        }
    }

    if (!customer) return null;

    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-customer">
                        <p></p>
                    </div>
                    <Formik
                        initialValues={customer}
                        onSubmit={(values) => updateCustomer(values)}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <div className="col-sm-8 p-0 form-input">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Sửa thông tin khách hàng</h2>
                                </div>
                                <div className="form-body bg-light p-3" style={{display:"none"}}>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Id
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="id"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="name" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Tên khách hàng
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="name" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Ngày sinh
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="date"
                                                    name="date"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="date" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Giới tính
                                            :</label>
                                        <div className="col-sm-4">
                                            <div className="input">
                                                <Field
                                                    type="radio"
                                                    name="gender"
                                                    className="form-check-input"
                                                    value="0"/>
                                            </div>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="input">
                                                <Field
                                                    type="radio"
                                                    name="gender"
                                                    className="form-check-input"
                                                    value="1"/>
                                            </div>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Nữ</label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="gender" component="span"
                                                  style={{color: "red", margin: "10px 0 0 165px"}}></ErrorMessage>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Số CMND
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="number"
                                                    name="idCard"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="idCard" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Số điện thoại
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="numberPhone"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="numberPhone" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Email
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="email" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Loại khách
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    component="select"
                                                    name="typeCustomer"
                                                    className="form-select">
                                                    {typeCustomer.map(type => {
                                                        return <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                                    })}
                                                </Field>
                                            </div>
                                            <ErrorMessage name="typeCustomer" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Địa chỉ
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    name="address"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="address" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-footer bg-dark p-3">
                                    <div>
                                        <Link to="/customer" className="btn btn-primary me-5">Quay lại</Link>
                                        <button type="submit" className="btn btn-secondary me-5">
                                            <span>Sửa</span>
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default UpdateCustomer;