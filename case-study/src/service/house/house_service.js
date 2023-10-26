import axios from "axios";

const lease = ["giờ", "ngày", "tháng", "năm"];
const URL_HOUSE = "http://localhost:8080/house";
export const getAll = async () => {
    try {
        let response = await axios.get(URL_HOUSE);
        return response.data;
    } catch (e){
        console.log("có lỗi xảy ra ở hàm getAll !")
    }
}
export const createHouse = async (values) => {
    try {
        const response = await axios.post(URL_HOUSE,values);
        return response.status;
    } catch (e){
        console.log("có lỗi xảy ra khi thêm mới");
    }
}
export const findById = async (id) => {
    try {
        let response = await axios.get(URL_HOUSE + "/" + id);
        return response.data;
    } catch (e){
        console.log("Không tìm thấy !")
    }
}
export const updateHouse = async (values) => {
    try {
        let response = await axios.put(URL_HOUSE + "/" + values.id,values);
        return response.status;
    } catch (e){
        console.log("sửa thất bại");
    }
}
export const deleteHouse = async (id) => {
    try {
        let response = await axios.delete(URL_HOUSE + "/" + id);
        return response.status;
    } catch (e){
        console.log("xóa thất bại");
    }
}
