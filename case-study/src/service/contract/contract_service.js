import {toast} from "react-toastify";
import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contract";

export const getAll = async () =>{
    try {
        let response = await axios.get(URL_CONTRACT);
        return response.data;
    } catch (e){
        toast.error("Đã xảy ra lỗi !")
    }
}

export const createContract  = async (values) => {
    try {
        let response = await axios.post(URL_CONTRACT,values);
        return response.status;
    } catch (e){
        toast.error("Thêm thất bại !");
    }
}
export const findById = async (id) => {
    try {
        let response = await axios.get(URL_CONTRACT + "/" + id);
        return response.data;
    } catch (e){
        toast("Không tìm thấy hợp đồng !")
    }
}
export const updateContract = async (values) => {
    try {
        let response = await axios.put(URL_CONTRACT + "/" + values.id, values);
        return response.status;
    } catch (e){
        toast.error("Sửa thất bại !");
    }
}
export const deleteContract = async (id) => {
    try {
        let response = await axios.delete(URL_CONTRACT + "/" + id);
        return response.status;
    } catch (e){
        toast.error("Xóa thất bại !");
    }
}