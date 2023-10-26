import '../../css/villa.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as villaService from '../../../service/villa/villa_service'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import * as customerService from "../../../service/customer/customer_service";


function UpdateVilla(){
    const navigate = useNavigate();
    const [villa, setVilla] = useState();
    const {id} = useParams();
    const listLease = villaService.lease;


    useEffect(() => {
        if (id) villaById(id);
    }, [id]);

    const villaById = async (id) => {
        villaService.findById(id).then(res =>{
            setVilla(res);
        });
    };

    const validateObject = {
        img: Yup.string()
            .required("Ảnh đại diện không đuợc để trống"),
        title: Yup.string()
            .required("Tên biệt thự không được để trống"),
        size: Yup.number()
            .min(0,"Diện tích biệt thự không được để trống"),
        rentPrice: Yup.number()
            .required("Chi phí không được để trống"),
        numberPeople: Yup.number()
            .min(0,"Số người tối đa không được để trống"),
        lease: Yup.string()
            .required("Kiểu thuê không được để trống"),
        roomStandard: Yup.string()
            .required("Tiêu chuẩn phòng không được để trống"),
        describe: Yup.string()
            .required("Mô tả tiện nghi không được để trống"),
        poolVolume: Yup.number()
            .min(0,"Diện tích hồ bơi không được để trống"),
        numberFloors: Yup.number()
            .min(0,"Số tầng không được để trống")
    }

    const updateVilla = async (values) => {
        console.log(values);
        let status = await villaService.updateVila(values);
        console.log("stt" + status);
        if (status === 200){
            toast.success(`Sửa biệt thự ${values.title} thành công !`);
            navigate("/villa");
        } else {
            toast.warning("Sửa thất bại !");
        }
    }

    if (!villa) return null;
    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-villa">
                        <p></p>
                    </div>
                    <Formik
                        initialValues={villa}
                        onSubmit={(values) => updateVilla(values)}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <div className="col-sm-8 p-0">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Sửa biệt thự</h2>
                                </div>
                                <div className="form-body bg-light p-3" style={{display:"none"}}>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-5 col-form-label">id :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="id"
                                                    className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Số người tối đa :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Cho thuê theo :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    component="select"
                                                    name="lease"
                                                    className="form-select">
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
                                                    type="text"
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Chi phí cho thuê :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Tiêu chuẩn phòng :</label>
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Mô tả tiện nghi :</label>
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
                                        <label htmlFor="name" className="col-sm-5 col-form-label">Diện tích hồ bơi :</label>
                                        <div className="col-sm-7">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="poolVolume"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="poolVolume" component="span"
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
                                                    type="text"
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
                                        <Link to="/villa" className="btn btn-primary me-5">Quay lại</Link>
                                        <button type="submit" className="btn btn-secondary">Sửa</button>
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

export default UpdateVilla;