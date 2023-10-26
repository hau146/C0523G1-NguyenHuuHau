import axios from "axios";
import {toast} from "react-toastify";

export const typeCustomer = ["Member", "Silver", "Gold", "Platinum", "Diamond"]
const URL_CUSTOMER = "http://localhost:8080/customer";
export const getAll = async (name) =>{
    try {
        let response = await axios.get(URL_CUSTOMER + `?name_like=${name}`);
        return response.data;
    } catch (e){
        toast.error("Đã xảy ra lỗi !");
    }
}
export const createCustomer = async (values) =>{
    try {
        let response = await axios.post(URL_CUSTOMER, values);
        return response.status;
    } catch (e){
        toast.error("Thêm thất bại !");
    }
}
export const updateCustomer = async (values) =>{
    try {
        let response = await axios.put(URL_CUSTOMER + "/" + values.id, values);
        return response.status;
    } catch (e){
        toast.error("Sửa thất bại !");
    }
}
export const findById = async (id) =>{
    try {
        let response = await axios.get(URL_CUSTOMER + "/" + id);
        return response.data;
    } catch (e){
        toast.error("Không tìm thấy khách hàng !");
    }
}
export const deleteCustomer = async (id) =>{
    try {
        let response = await axios.delete(URL_CUSTOMER + "/" + id);
        return response.status;
    } catch (e){
        toast.error("Xóa thất bại !");
    }
}
