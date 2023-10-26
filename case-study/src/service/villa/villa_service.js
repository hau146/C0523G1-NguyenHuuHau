import {toast} from "react-toastify";
import axios from "axios";

export const lease = ["giờ", "ngày", "tháng", "năm"];
const URL_VILLA = "http://localhost:8080/villa";
export const getAll = async () => {
    try {

        let response = await axios.get(URL_VILLA);
        return response.data;
    } catch (e){
        toast.error("Đã xảy ra lỗi !")
    }
}

export const createVilla  = async (values) => {
    try {
        let response = await axios.post(URL_VILLA,values);
        return response.status;
    } catch (e){
        toast.error("Thêm thất bại !");
    }
}
export const findById = async (id) => {
    try {
        let response = await axios.get(URL_VILLA + "/" + id);
        return response.data;
    } catch (e){
        toast("Không tìm thấy biệt thự !")
    }
}
export const updateVila = async (values) => {
    try {
        let response = await axios.put(URL_VILLA + "/" + values.id, values);
        return response.status;
    } catch (e){
        console.log("Sửa thất bại")
    }
}
export const deleteVilla = async (id) => {
    try {
        let response = await axios.delete(URL_VILLA + "/" + id);
        return response.status;
    } catch (e){
        toast.error("Xóa thất bại !");
    }
}
