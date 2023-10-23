import {Link, useNavigate} from "react-router-dom";
import '../css/contract.css'
import '../css/validate.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"
import * as contractService from '../../service/contract/contract_service'
function CreateContract() {
    const navigate = useNavigate();
    const contractList = contractService.getAll();
    const initValue = {
        startDay: "",
        endDay: "",
        deposit: "",
        totalPrice: ""
    }
    const validateObject = {
        startDay: Yup.date()
            .required("Ngày tạo hợp đồng không được để trống")
            .min(new Date().getDay(), "Ngày bắt đầu thuê không được bé hơn ngày hiện tại"),

        endDay: Yup.string()
            .required("Ngày kết thúc hợp đồng không được để trống")
            .min(new Date().getDay(), "Ngày hết hợp đồng không được bé hơn ngày hiện tại"),
        deposit: Yup.number()
            .required("Tiền đặt cọc không được để trống")
            .min(5000000, "Tiền đặt cọc không được nhỏ hơn 5.000.000"),
        totalPrice: Yup.number()
            .required("Tổng tiền không được để trống")
            .min(10000000, "Tổng tiền không được nhỏ hơn 10.000.000"),
    }


    //hàm đếm số lượng id
    let totalId = contractList.reduce((count, obj) => {
        return count + (obj.id ? 1 : 0);
    }, 0);
    console.log(totalId);


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
                        initialValues={initValue}
                        onSubmit={(values) => {
                            const object = {
                                id: totalId + 1, //id tự động tăng
                                startDay: values.startDay,
                                endDay: values.endDay,
                                deposit: values.deposit,
                                totalPrice: values.totalPrice
                            }
                            contractService.create(object);
                            toast.success("Thêm mới hợp đồng thành công !");
                            navigate("/contract");
                        }}
                        validationSchema={Yup.object(validateObject)}
                    >
                        <div className="col-sm-8 p-0 form-input">
                            <Form>
                                <div className="form-header bg-dark">
                                    <h2 className="text-light fw-bold ms-3">Thêm mới hợp đồng</h2>
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
                                        <Link to="/room" className="btn btn-primary me-5">Quay lại</Link>
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
export default CreateContract;