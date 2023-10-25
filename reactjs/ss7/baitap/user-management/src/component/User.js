import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getAll} from "../reduxs/middlewares/userMiddleware";

export function User(){
    const user = useSelector((store) => store.user);
    console.log(user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, []);

    function deleteUserById(id) {
        dispatch (deleteUser(id));
    }
    if (!user) return null;

    return(
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Wedsite</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.map((user, index) => {
                    return (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>{deleteUserById(user.id)}} >Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}