import toast from "react-simple-toasts";
import axios from "axios";
const URL_USER = "http://localhost:8080/users";
export const getAll = async () => {
    try {
        const response = await axios.get(URL_USER);
        return response.data;
    } catch (e){
        toast.error("Co loi xay ra !")
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(URL_USER + "/" + id);
        return response.status;
    } catch (e){
        toast.error("Xoa that bai !")
    }
}