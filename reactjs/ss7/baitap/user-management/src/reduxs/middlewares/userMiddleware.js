import * as userService from "../../service/userService"
import {DELETE, GET_ALL} from "../actionType";

export const getAll = () => async (dispatch) => {
    const data = await userService.getAll();
    dispatch({
        type: GET_ALL,
        payload: data
    });
};

export const deleteUser = (id) => async (dispatch) => {
    const res = await userService.deleteUser(id);
    if (res === 200) {
        dispatch({
            type: DELETE,
            payload: id
        })
    }
}
