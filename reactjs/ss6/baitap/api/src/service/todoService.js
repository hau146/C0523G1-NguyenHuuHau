import axios from "axios";
import {toast} from "react-toastify";
const URL_TODO = "http://localhost:8080/todo";

export const getAll = async () => {
    try {
        let response = await axios.get(URL_TODO);
        return response.data;
    } catch (e){
        toast.error("da xay ra loi !")
    }
}
export const createTodo = async (values) => {
    try {
        let response = await axios.post(URL_TODO, values);
        return response.status;
    } catch (e){
        toast.error("false")
    }
}