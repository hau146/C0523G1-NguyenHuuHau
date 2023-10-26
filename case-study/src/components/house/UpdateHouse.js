import '../css/house.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as villaService from "../../service/villa/villa_service";
import * as Yup from "yup";
import * as houseService from '../../service/house/house_service'
import {toast} from "react-toastify";
import {useEffect, useState} from "react";


function UpdateHouse() {
    const navigate = useNavigate();
    const listLease = villaService.lease;
    const [house, setHouse] = useState();
    const {id} = useParams();
    useEffect(() => {
        if (id) findById(id);
    }, [id])

    const findById = async (id) => {
        houseService.findById(id).then(res => {
            console.log(res);
            setHouse(res);
        });
    }

    const validateObject = {
        img: Yup.string()
            .required("Ảnh đại diện không đuợc để trống"),
        title: Yup.string()
            .required("Tên biệt thự không được để trống"),
        size: Yup.number()
            .min(0, "Diện tích biệt thự không được để trống"),
        rentPrice: Yup.number()
            .required("Chi phí không được để trống"),
        numberPeople: Yup.number()
            .min(0, "Số người tối đa không được để trống"),
        lease: Yup.string()
            .min(0, "Kiểu thuê không được để trống"),
        roomStandard: Yup.string()
            .required("Tiêu chuẩn phòng không được để trống"),
        describe: Yup.string()
            .required("Mô tả tiện nghi không được để trống"),
        numberFloors: Yup.number()
            .min(0, "Số tầng không được để trống")
    }

    const updateHouse = async (values) => {
        let status = await houseService.updateHouse(values);
        if (status === 200) {
            toast.success(`Sửa thông tin ${values.title} thành công !`);
            navigate("/house");
        } else {
            toast.warning("Sửa thất bại");
        }
    }
    if (!house) return null;
    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-house">
                        <p></p>
                    </div>

                    <Formik
                        initialValues={house}
                        onSubmit={(values) => updateHouse(values)}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <div className="col-sm-8 p-0">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Sửa thông tin nhà</h2>
                                </div>

                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Tên dịch vụ :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="title"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="title" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Ảnh biệt thự :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="img"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="img" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Số người tối đa
                                            :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="number"
                                                    name="numberPeople"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="numberPeople" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Cho thuê theo
                                            :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    component="select"
                                                    name="lease"
                                                    className="form-select">
                                                    <option value="">---Chọn---</option>
                                                    {listLease.map((type, index) =>
                                                        <option value={type}>{listLease[index]}</option>)}
                                                </Field>
                                            </div>
                                            <ErrorMessage name="lease" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Diện tích :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="number"
                                                    name="size"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="size" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Chi phí cho thuê
                                            :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="number"
                                                    name="rentPrice"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="rentPrice" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Tiêu chuẩn phòng
                                            :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="roomStandard"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="roomStandard" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Mô tả tiện nghi
                                            :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="describe"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="describe" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Số tầng :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="number"
                                                    name="numberFloors"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="numberFloors" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-footer bg-dark p-3">
                                    <div>
                                        <Link to="/house" className="btn btn-secondary me-5">Quay lại</Link>
                                        <button type="submit" className="btn btn-primary">Sửa</button>
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

export default UpdateHouse;