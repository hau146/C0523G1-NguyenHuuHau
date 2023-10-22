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

  function handleValidate(){
    const errors = {};
    if (!form.name){
      errors.name = "Tên không được để trống";
    }
    if (!form.idCard){
      errors.idCard = "CMND không được để trống";
    }
    if (!form.date){
      errors.date = "Năm sinh không được để trống";
    } else if (form.date < 1900){
      errors.date = "Năm sinh khai báo phải lớn hơn 1900";
    }
    if (!form.nationality){
      errors.nationality = "Quốc tịch không được để trống";
    }
    if (!form.province){
      errors.province = "Tỉnh/thành không được để trống";
    }
    if (!form.district){
      errors.district = "Quận/huyện không được để trống";
    }
    if (!form.ward){
      errors.ward = "Phường/xã không được để trống";
    }
    if (!form.address){
      errors.address = "Số nhà, phố, tổ dân phố /thôn /đội không được để trống";
    }
    if (!form.phone){
      errors.phone = "Số điện thoại không được để trống";
    }
    if (!form.email){
      errors.email = "Email không được để trống";
    } else if (!REGEX.email.test(form.email)){
      errors.email = "Email phải có định dạng abc@gmail.com";
    }
    if (!form.route){
      errors.route = "Thông tin không được để trống !";
    }
    return errors;
  }
  function handleSubmit() {
    alert("Khai báo thành công!");
  }

  return (
      <div>
        <h1>Tờ khai y tế</h1>
        <Formik
            initialValues={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
          {({errors, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                  <label>Họ tên</label>
                  <input
                      type="text"
                      name="name"
                      value={form.name || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.name}</p>
                </div>
                <div className={`custom-input ${errors.idCard ? "custom-input-error" : ""}`}>
                  <label>Số hộ chiếu/CMND</label>
                  <input
                      type="number"
                      name="idCard"
                      value={form.idCard || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.idCard}</p>
                </div>
                <div className={`custom-input ${errors.date ? "custom-input-error" : ""}`}>
                  <label>Năm sinh</label>
                  <input
                      type="number"
                      name="date"
                      value={form.date || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.date}</p>
                </div>
                <div>
                  <label>Giới tính</label>
                  <input className="gender" type="radio"/>Nam
                  <input className="gender" type="radio"/>Nữ
                </div>
                <div className={`custom-input ${errors.nationality ? "custom-input-error" : ""}`}>
                  <label>Quốc tịch</label>
                  <input
                      type="text"
                      name="nationality"
                      value={form.nationality || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.nationality}</p>
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
                <div className={`custom-input ${errors.province ? "custom-input-error" : ""}`}>
                  <label>Tỉnh thành</label>
                  <input
                      type="text"
                      name="province"
                      value={form.province || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.province}</p>
                </div>
                <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
                  <label>Quận / huyện</label>
                  <input
                      type="text"
                      name="district"
                      value={form.district || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.district}</p>
                </div>
                <div className={`custom-input ${errors.ward ? "custom-input-error" : ""}`}>
                  <label>Phường/ xã</label>
                  <input
                      type="text"
                      name="ward"
                      value={form.ward || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.ward}</p>
                </div>
                <div className={`custom-input ${errors.address ? "custom-input-error" : ""}`}>
                  <label>Địa chỉ</label>
                  <textarea
                      type="text"
                      name="address"
                      value={form.address || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.address}</p>
                </div>
                <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                  <label>Điện thoại</label>
                  <input
                      type="number"
                      name="phone"
                      value={form.phone || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.phone}</p>
                </div>
                <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                  <label>Email</label>
                  <input
                      type="text"
                      name="email"
                      value={form.email || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.email}</p>
                </div>
                <h1>Trong vòng 14 ngày qua, Anh/ Chị có đến quốc gia ? vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h1>
                <div className={`custom-input ${errors.route ? "custom-input-error" : ""}`}>
                  <textarea
                      type="text"
                      name="route"
                      value={form.route || ""}
                      onChange={handleChange}/>
                  <p className="error">{errors.route}</p>
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
              </form>
          )}
        </Formik>
      </div>
  )
}

export default App;
