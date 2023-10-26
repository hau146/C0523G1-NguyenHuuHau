import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Customer} from "./components/customer/Customer";
import {Room} from "./components/facility/room/Room";
import CreateRoom from "./components/facility/room/CreateRoom";
import {Contract} from "./components/contract/Contract";
import {House} from "./components/facility/house/House";
import CreateHouse from "./components/facility/house/CreateHouse";
import {Villa} from "./components/facility/villa/Villa";
import CreateVilla from "./components/facility/villa/CreateVilla";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CreateContract from "./components/contract/CreateContract";
import CreateCustomer from "./components/customer/CreateCustomer";
import UpdateCustomer from "./components/customer/UpdateCustomer";
import UpdateContract from "./components/contract/UpdateContract";
import UpdateVilla from "./components/facility/villa/UpdateVilla";
import UpdateHouse from "./components/facility/house/UpdateHouse";
import UpdateRoom from "./components/facility/room/UpdateRoom";
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/customer" element={<Customer/>}></Route>
                <Route path="/villa" element={<Villa/>}></Route>
                <Route path="/room" element={<Room/>}></Route>
                <Route path="/house" element={<House/>}></Route>
                <Route path="/contract" element={<Contract/>}></Route>
                <Route path="/createVilla" element={<CreateVilla/>}></Route>
                <Route path="/createRoom" element={<CreateRoom/>}></Route>
                <Route path="/createHouse" element={<CreateHouse/>}></Route>
                <Route path="/createContract" element={<CreateContract/>}></Route>
                <Route path="/createCustomer" element={<CreateCustomer/>}></Route>
                <Route path="/updateCustomer/:id" element={<UpdateCustomer/>}></Route>
                <Route path="/updateContract/:id" element={<UpdateContract/>}></Route>
                <Route path="/updateVilla/:id" element={<UpdateVilla/>}></Route>
                <Route path="/updateHouse/:id" element={<UpdateHouse/>}></Route>
                <Route path="/updateRoom/:id" element={<UpdateRoom/>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
