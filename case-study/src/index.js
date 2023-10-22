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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/customer" element={<Customer/>}></Route>
                <Route path="/room" element={<Room/>}></Route>
                <Route path="/house" element={<House/>}></Route>
                <Route path="/contract" element={<Contract/>}></Route>
                <Route path="/createRoom" element={<CreateRoom/>}></Route>
                <Route path="/createHouse" element={<CreateHouse/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
