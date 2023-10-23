import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Customer} from "./components/manager/Customer";
import {Room} from "./components/manager/Room";
import CreateRoom from "./components/room/CreateRoom";
import {Contract} from "./components/manager/Contract";
import {House} from "./components/manager/House";
import CreateHouse from "./components/house/CreateHouse";
import {Villa} from "./components/manager/Villa";
import CreateVilla from "./components/villa/CreateVilla";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CreateContract from "./components/contract/CreateContract";
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
            </Routes>
            <ToastContainer></ToastContainer>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
