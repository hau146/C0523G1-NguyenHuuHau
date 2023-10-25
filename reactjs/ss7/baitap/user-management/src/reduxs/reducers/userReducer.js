import {DELETE, GET_ALL} from "../actionType";

export const userReducer = (user = [], action) => {
    const {type, payload} = action;
    switch (type){
        case GET_ALL:
            return payload;
        case DELETE:
            return user.filter((user) => user.id !== payload);
        default:
            return user;
    }
};