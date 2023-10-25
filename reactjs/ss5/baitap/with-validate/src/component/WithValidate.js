import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


export function WithValidate() {
    const initValue = {
        name: "",
        idCard:"",
        date: "",
        nationality: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        phone: "",
        email: "",
        touch: ""
    };

    const validateObject = {
        name: Yup.string()
            .required("Tên không được để trống"),
        idCard: Yup.string()
            .required("CCCD không được để trống"),
        date: Yup.number()
            .required("Tuổi không được để trống")
            .min(1900, "Năm sinh phải lớn hơn 1900"),
        nationality: Yup.string()
            .required("Quốc tịch không được để trống"),
        province: Yup.string()
            .required("Thành phố không được để trống"),
        district: Yup.string()
            .required("Quận không được để trống"),
        ward: Yup.string()
            .required("Phường không được để trống"),
        address: Yup.string()
            .required("SSố nhà, phố, tổ dân phố /thôn /đội không được để trống"),
        phone: Yup.string()
            .required("SDT không được để trống"),
        email: Yup.string()
            .required("Email không được để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng format"),
        touch: Yup.string()
            .required("Lời khai không được để trống"),

    };

    function handleSubmit() {
        alert("Khai báo thành công!");
    }

    return (
        <div>
            <h1>Tờ khai y tế</h1>
            <Formik
                initialValues={initValue}
                onSubmit={handleSubmit}
                validationSchema={Yup.object(validateObject)}
            >
                <Form>
                    <div className="col-sm-4 col-form-label">
                    <label>Họ tên</label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"/>
                        <ErrorMessage name="name" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Số hộ chiếu/CMND</label>
                        <Field
                            type="text"
                            name="idCard"
                            className="form-control"/>
                        <ErrorMessage name="idCard" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Năm sinh</label>
                        <Field
                            type="text"
                            name="date"
                            className="form-control"/>
                        <ErrorMessage name="date" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div>
                        <label>Giới tính</label>
                        <input className="gender" type="radio"/>Nam
                        <input className="gender" type="radio"/>Nữ
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Quốc tịch</label>
                        <Field
                            type="text"
                            name="nationality"
                            className="form-control"/>
                        <ErrorMessage name="nationality" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="custom-input">
                        <label>Công ty làm việc</label>
                        <input type="text"/>
                    </div>
                    <div className="custom-input">
                        <label>Bộ phận làm việc</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Có thẻ bảo hiểm y tế</label>
                        <input type="checkbox"/>
                    </div>
                    <h1>Địa chỉ liên lạc tại việt nam</h1>
                    <div className="col-sm-4 col-form-label">
                        <label>Tỉnh thành</label>
                        <Field
                            type="text"
                            name="province"
                            className="form-control"/>
                        <ErrorMessage name="province" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Quận / huyện</label>
                        <Field
                            type="text"
                            name="district"
                            className="form-control"/>
                        <ErrorMessage name="district" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Phường/ xã</label>
                        <Field
                            type="text"
                            name="ward"
                            className="form-control"/>
                        <ErrorMessage name="ward" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Địa chỉ</label>
                        <Field
                            type="text"
                            name="address"
                            className="form-control"/>
                        <ErrorMessage name="address" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="col-sm-4 col-form-label">
                        <label>Điện thoại</label>
                        <Field
                            type="text"
                            name="phone"
                            className="form-control"/>
                        <ErrorMessage name="phone" component="span"
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
                    <h1>Trong vòng 14 ngày qua, Anh/ Chị có đến quốc gia ? vùng lãnh thổ nào (Có thể đi qua nhiều quốc
                        gia)</h1>
                    <div className="col-sm-4 col-form-label">
                        <Field
                            type="text"
                            name="route"
                            className="form-control"/>
                        <ErrorMessage name="route" component="span"
                                      style={{color: "red"}}></ErrorMessage>
                    </div>
                    <h1>Trong vòng 14 ngày qua, Anh/ Chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h1>
                    <input type="checkbox"/>Sốt<br/>
                    <input type="checkbox"/>Ho<br/>
                    <input type="checkbox"/>Khó thở<br/>
                    <input type="checkbox"/>Viêm phổi<br/>
                    <input type="checkbox"/>Đau họng<br/>
                    <input type="checkbox"/>Mệt mỏi<br/>
                    <h1>Trong vòng 14 ngày qua, Anh/ Chị có tiếp xúc với ?</h1>
                    <input type="checkbox"/>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19<br/>
                    <input type="checkbox"/>Người từ nước có bệnh COVID-19<br/>
                    <input type="checkbox"/>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)<br/>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}