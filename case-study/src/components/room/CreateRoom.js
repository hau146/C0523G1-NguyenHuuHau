import {Link, useNavigate} from "react-router-dom";
import '../css/room.css'
import '../css/validate.css'
import {useState} from "react";
import {Formik} from "formik";
import {toast} from "react-toastify";
import * as roomService from '../../service/room/room_service'

function CreateRoom() {
    const [formRoom, setFormRomm] = useState({})
    const navigate = useNavigate();
    const room = roomService.getAll();
    const listLease = roomService.lease;
    const REGEX = {
        name: /^[^0-9]*$/g,
        img: /^[^0-9]*$/g,
        freeService: /^[a-zA-Z0-9,]*$/g
    }
    function handleChange(event) {
        setFormRomm({
            ...formRoom,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const error = {};
        if (!formRoom.name) {
            error.name = "Tên phòng không được để trống !"
        } else if(!REGEX.name.test(formRoom.name)){
            error.name = "Tên không được chứa kí tự số !"
        }
        if (!formRoom.img) {
            error.img = "Ảnh không được để trống !"
        } else if(!REGEX.img.test(formRoom.img)){
            error.name = "Ảnh không được chứa kí tự số !"
        }
        if (!formRoom.size) {
            error.size = "Diện tích phòng không được để trống !"
        } else if(formRoom.size <= 0){
            error.size = "Diện tích phải lớn hơn 0 !"
        }
        if (!formRoom.rentPrice) {
            error.rentPrice = "Chi phí phòng không được để trống !"
        } else if(formRoom.rentPrice <= 0){
            error.rentPrice = "Chi phí cho thuê phải lớn hơn 0 !"
        }
        if (!formRoom.numberPeople) {
            error.numberPeople = "Số lượng người ở không được để trống !"
        } else if(formRoom.numberPeople < 1 || formRoom.numberPeople > 20){
            error.numberPeople = "Số người ở tối đa phải 1-20 người !"
        }
        if (!formRoom.lease) {
            error.lease = "Kiểu thuê không được để trống !"
        }
        if (!formRoom.freeService) {
            error.freeService = "Dịch vụ đi kèm không được để trống !"
        } else if(!REGEX.freeService.test(formRoom.freeService)){
            error.freeService = "Dịch vụ đi kèm không được nhập kí tự đặc biệt !"
        }
        return error;
    }


    //hàm đếm số lượng id
    let totalId = room.reduce((count,obj) => {
        return count + (obj.id ? 1 : 0);
    }, 0);
    console.log(totalId);

    function handleSubmit() {
        //viết hàm thêm mới ở đây
        const object = {
            id: totalId + 1, //id tự động tăng
            name: formRoom.name,
            img: formRoom.img,
            size: formRoom.size,
            lease: formRoom.lease,
            numberPeople: formRoom.numberPeople,
            rentPrice: formRoom.rentPrice,
            freeService: formRoom.freeService
        }
        roomService.create(object);
        toast.success("Thêm mới thành công !");
        navigate("/room");
    }


    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create-room">
                        <p></p>
                    </div>
                    <Formik initialValues={formRoom} onSubmit={handleSubmit} validate={handleValidate} >
                        {({errors, handleSubmit}) => (
                            <div className="col-sm-8 p-0 form-input">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-header bg-dark">
                                        <h2 className="text-light fw-bold ms-3">Thêm mới phòng</h2>
                                    </div>

                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Tên phòng
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.name ? "input-error" : ""}`}>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formRoom.name || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.name}</p></small>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Ảnh
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.img ? "input-error" : ""}`}>
                                                    <input
                                                        type="text"
                                                        name="img"
                                                        value={formRoom.img || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.img}</p></small>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Diện tích
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.size ? "input-error" : ""}`}>
                                                    <input
                                                        type="number"
                                                        name="size"
                                                        value={formRoom.size || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.size}</p></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Chi phí cho thuê
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.rentPrice ? "input-error" : ""}`}>
                                                    <input
                                                        type="number"
                                                        name="rentPrice"
                                                        value={formRoom.rentPrice || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.rentPrice}</p></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Số lượng người ở
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.numberPeople ? "input-error" : ""}`}>
                                                    <input
                                                        type="number"
                                                        name="numberPeople"
                                                        value={formRoom.numberPeople || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.numberPeople}</p></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Kiểu thuê
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.lease ? "input-error" : ""}`}>
                                                    <select
                                                        name="lease"
                                                        value={formRoom.lease || ""}
                                                        onChange={handleChange}
                                                        className="form-select">
                                                        <option value="">---Chọn---</option>
                                                        {listLease.map((lease, index) => (
                                                            <option value={listLease[index]}>{listLease[index]}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <small className="error"><p >{errors.lease}</p></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body bg-light p-3">
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-4 col-form-label">Dịch vụ đi kèm
                                                :</label>
                                            <div className="col-sm-8">
                                                <div className={`input ${errors.freeService ? "input-error" : ""}`}>
                                                    <textarea
                                                        type="text"
                                                        name="freeService"
                                                        value={formRoom.freeService || ""}
                                                        onChange={handleChange}
                                                        className="form-control"/>
                                                </div>
                                                <small className="error"><p >{errors.freeService}</p></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-footer bg-dark p-3">
                                        <div>
                                            <Link to="/room" className="btn btn-primary me-5">Quay lại</Link>
                                            <button type="submit" className="btn btn-secondary me-5">
                                                <span>Thêm</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>


                </div>
            </div>
        </div>
    );
}

export default CreateRoom;