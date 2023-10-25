import {Link, useNavigate} from "react-router-dom";
import '../css/customer.css'
import '../css/validate.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"
import * as customerService from '../../service/customer/customer_service'
function CreateCustomer() {
    const navigate = useNavigate();
    const listTypeCustomer = customerService.typeCustomer;

    const initValue = {
        name: "",
        date: "",
        gender: "0",
        idCard: "",
        numberPhone: "",
        email: "",
        typeCustomer: "",
        address: ""
    }

    const validateObject = {
        name: Yup.string()
            .required("Tên khách hàng không được để trống !"),
        date: Yup.date()
            .max(new Date(), "không được bé hơn ngày hiện tại")
            .required("Ngày sinh khách hàng không được để trống"),
        idCard: Yup.string()
            .required("CMND không được để trống")
            .length(12, "CMND phải đủ và không đuợc quá 12 số"),
        numberPhone: Yup.string()
            .required("Số điện thoại không được để trống")
            .length(10, "Số điện thoại phải đủ và không được quá 10 số"),
        email: Yup.string()
            .required("Email không được để trống !")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email sai định dạng"),
        typeCustomer: Yup.string()
            .min(0, "Loại khách hàng không được để trống !"),
        address: Yup.string()
            .required("Địa chỉ không được để trống !"),
        gender: Yup.string()
            .min(0, "Giới tính không được bỏ trống !")
    }

    const createCustomer = async (values) => {
        const object = {
            name: values.name,
            date: values.date,
            gender: values.gender = +values.gender,
            idCard: values.idCard,
            numberPhone: values.numberPhone,
            email: values.email,
            typeCustomer: values.typeCustomer,
            address: values.address
        }
        console.log(object)
        let status = await customerService.createCustomer(object);
        if (status === 201) {
            toast.success("Thêm mới khách hàng thành công !");
            navigate("/customer");
        } else {
            toast.warning("Thêm mới thất bại !")
        }
    }


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
                    initialValues={initValue}
                    onSubmit={(values) => createCustomer(values)}
                    validationSchema={Yup.object(validateObject)}
                >
                    <div className="col-sm-8 p-0 form-input">
                        <Form>
                            <div className="form-header bg-dark">
                                <h2 className="text-light fw-bold ms-3">Thêm mới khách hàng</h2>
                            </div>
                            <div className="form-body bg-light p-3">
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-4 col-form-label">Tên khách hàng
                                        :</label>
                                    <div className="col-sm-8">
                                        <div className={`Field ${initValue.name ? "input-error" : ""}`}>
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
                                                type="number"
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
                                                <option value="">---Chọn---</option>
                                                {listTypeCustomer.map((type, index) =>
                                                    <option value={type}>{listTypeCustomer[index]}</option>)}
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
                                        <span>Thêm</span>
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
export default CreateCustomer;