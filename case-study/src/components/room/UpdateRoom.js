import {Link, useNavigate, useParams} from "react-router-dom";
import '../css/room.css'
import '../css/validate.css'
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as roomService from '../../service/room/room_service'
import {toast} from "react-toastify";
import * as villaService from "../../service/villa/villa_service";

function UpdateRoom() {
    const navigate = useNavigate();
    const listLease = villaService.lease;
    const [room, setRoom] = useState();
    const {id} = useParams();

    useEffect(() => {
        if (id) findById(id);
    }, [id])

    const findById = async (id) => {
        roomService.findById(id).then(res => {
            setRoom(res);
        });
    }


    const validateObject = {
        img: Yup.string()
            .required("Ảnh không được để trống !"),
        title: Yup.string()
            .required("Tên phòng không được để trống !"),
        size: Yup.number()
            .required("Diện tích phòng không được để trống !")
            .min(0, "Diện tích phải lớn hơn 0 !"),
        rentPrice: Yup.number()
            .required("Chi phí thuê phòng không được để trống !")
            .min(0, "Chi phí cho thuê phải lớn hơn 0 !"),
        numberPeople: Yup.number()
            .required("Số lượng người ở không được để trống !")
            .min(1, "Số người ở tối đa phải 1-20 người !"),
        lease: Yup.string()
            .min(0, "Kiểu thuê không được để trống !"),
        freeService: Yup.string()
            .required("Dịch vụ đi kèm không được để trống !")
            .matches(/^[a-zA-Z0-9,]*$/g, "Dịch vụ đi kèm không được nhập kí tự đặc biệt !")
    }


    const updateRoom = async (values) => {
        let status = await roomService.updateRoom(values);
        if (status === 200) {
            toast.success(`Sửa thông tin dịch vụ ${values.title} thành công !`);
            navigate("/room");
        } else {
            toast.warning("Sửa thất bại");
        }
    }


    if (!room) return null;

    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-room">
                        <p></p>
                    </div>
                    <Formik
                        initialValues={room}
                        onSubmit={(values) => updateRoom(values)}
                        validationSchema={Yup.object(validateObject)}
                    >


                        <div className="col-sm-8 p-0 form-input">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Sửa thông tin phòng</h2>
                                </div>

                                <div className="form-body bg-light p-3">
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Tên phòng
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Ảnh
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Diện tích
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Chi phí cho thuê
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Số người tối đa
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Kiểu thuê
                                            :</label>
                                        <div className="col-sm-8">
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
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Dịch vụ đi kèm
                                            :</label>
                                        <div className="col-sm-8">
                                            <div className="input">
                                                <Field
                                                    type="text"
                                                    name="freeService"
                                                    className="form-control"/>
                                            </div>
                                            <ErrorMessage name="freeService" component="span"
                                                          style={{color: "red"}}></ErrorMessage>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-footer bg-dark p-3">
                                    <div>
                                        <Link to="/room" className="btn btn-primary me-5">Quay lại</Link>
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

export default UpdateRoom;