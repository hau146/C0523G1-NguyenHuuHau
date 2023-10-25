import {Link, useNavigate, useParams} from "react-router-dom";
import '../css/contract.css'
import '../css/validate.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"
import * as contractService from '../../service/contract/contract_service'
import {useEffect, useState} from "react";

function UpdateContract() {
    const navigate = useNavigate();
    const [contract, setContract] = useState();
    const {id} = useParams();
    useEffect(() => {
        if (id) contractById(id);
    }, [id]);
    const contractById = id => {
        console.log(id);
        contractService.findById(id).then(res => {
            res.deposit = +res.deposit;
            res.totalPrice = +res.totalPrice;
            setContract(res);
            console.log(contract)
        })
    }

    const validateObject = {
        name: Yup.string()
            .required("Tên hợp đồng không được bỏ trống !")
            .matches(/^([A-Z]{2}-[A-Z]{2}-\d{3})|([A-Z]{2}-[A-Z]-\d{3})$/, "Tên phải đúng định dạng XX-XX-000 hoặc XX-X-000"),
        startDay: Yup.date()
            .required("Ngày tạo hợp đồng không được để trống !")
            .min(new Date(), "Ngày tạo hợp đồng không được bé hơn ngày hiện tại"),
        endDay: Yup.date()
            .required("Ngày kết thúc hợp đồng không được để trống")
            .min(new Date(), "Ngày hết hợp đồng không được bé hơn ngày hiện tại"),
        deposit: Yup.number()
            .required("Tiền đặt cọc không được để trống !")
            .min(5000000, "Tiền đặt cọc không được nhỏ hơn 5.000.000"),
        totalPrice: Yup.number()
            .required("Tổng tiền không được để trống")
            .min(10000000, "Tổng tiền không được nhỏ hơn 10.000.000"),
    }


    const updateContract = async (values) => {
        const object = {
            name: values.name,
            startDay: values.startDay,
            endDay: values.endDay,
            deposit: values.deposit,
            totalPrice: values.totalPrice
        }
        let status = await contractService.createContract(object);
        console.log(status)
        if (status === 201){
            toast.success(`Sửa hợp đồng ${values.name} thành công !`);
            navigate("/contract");
        } else {
            toast.warning("Sửa thất bại !")
        }
    }

    if (!contract) return null;
    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-contract">
                        <p></p>
                    </div>
                    <Formik
                        initialValues={contract}
                        onSubmit={(values) => updateContract(values)}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <div className="col-sm-8 p-0 form-input">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Sửa hợp đồng</h2>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Tên hợp đồng
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Ngày bắt đầu thuê
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="date"
                                                    name="startDay"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="startDay" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Ngày kết thúc thuê
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="date"
                                                    name="endDay"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="endDay" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Tiền đặt cọc
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="deposit"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="deposit" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Tổng tiền thanh toán
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="totalPrice"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="totalPrice" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>

                                    </div>
                                </div>


                                <div className="form-footer bg-dark p-3">
                                    <div>
                                        <Link to="/contract" className="btn btn-primary me-5">Quay lại</Link>
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

export default UpdateContract;