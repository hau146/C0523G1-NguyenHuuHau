import axios from "axios";

export const lease = ["giờ", "ngày", "tháng", "năm"];
const URL_ROOM = "http://localhost:8080/room";

export const getAll = async () => {
    try {
        let response = await axios.get(URL_ROOM);
        return response.data;
    } catch (e){
        console.log("có lỗi xảy ra ở hàm getAll !")
    }
}
export const createRoom = async (values) => {
    try {
        const response = await axios.post(URL_ROOM,values);
        return response.status;
    } catch (e){
        console.log("có lỗi xảy ra khi thêm mới");
    }
}
export const findById = async (id) => {
    try {
        let response = await axios.get(URL_ROOM + "/" + id);
        return response.data;
    } catch (e){
        console.log("Không tìm thấy !")
    }
}
export const updateRoom = async (values) => {
    try {
        let response = await axios.put(URL_ROOM + "/" + values.id,values);
        return response.status;
    } catch (e){
        console.log("sửa thất bại");
    }
}
export const deleteRoom = async (id) => {
    try {
        let response = await axios.delete(URL_ROOM + "/" + id);
        return response.status;
    } catch (e){
        console.log("xóa thất bại");
    }
}
