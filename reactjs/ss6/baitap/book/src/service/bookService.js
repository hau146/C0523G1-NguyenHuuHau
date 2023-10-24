import axios from "axios";
const URL_BOOK = "http://localhost:8080/book";
export const getAll =  async ()=> {
    try {
        let response = await axios.get(URL_BOOK);
        return response.data;
    } catch (e){
        alert("da xay ra loi !")
    }
}
export const findById =  async (id)=> {
    try {
        let response = await axios.get(URL_BOOK + "/" + id);
        return response.data;
    } catch (e){
        alert("da xay ra loi !")
    }
}

export const createBook = async (values) => {
    try {
        let response = await axios.post(URL_BOOK, values);
        return response.status;
    } catch (e){
        alert("them that bai")
    }
}

export const updateBook = async (values) => {
    try {

        let response = await axios.put(URL_BOOK + "/" + values.id,values);
        return response.status;
    } catch (e){
        alert("sua that bai")
    }
}

export const deleteBook = async (id) => {
    try {

        let response = await axios.delete(URL_BOOK + "/" + id);
        return response.status;
    } catch (e){
        alert("xoa that bai")
    }
}
