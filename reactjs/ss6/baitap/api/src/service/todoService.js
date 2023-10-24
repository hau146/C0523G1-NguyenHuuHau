import axios from "axios";
const URL_TODO = "http://localhost:8080/todo";
export const getAll = async () => {
    try {
        let response = await axios.get(URL_TODO);
        return response.data;
    } catch (e){
        alert("da xay ra loi !")
    }
}
export const createTodo = async (values) => {
    try {
        let response = await axios.post(URL_TODO, values);
        return response.status;
    } catch (e){
        alert("false")
    }
}