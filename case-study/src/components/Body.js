import * as villaService from '../service/villa/villa_service'
import * as houseService from '../service/house/house_service'
import * as roomService from '../service/room/room_service'
import {useEffect, useState} from "react";

export function Body() {
    const [villa, setVilla] = useState([]);
    const [house, setHouse] = useState([]);
    const [room, setRoom] = useState([]);
    useEffect(() => {
        getAllVilla();
        getAllHouse();
        getAllRoom();
    }, []);
    const getAllVilla = async () => {
        let response = await villaService.getAll();
        setVilla(response);
    }
    const getAllHouse = async () => {
        let response = await houseService.getAll();
        setHouse(response);
    }
    const getAllRoom = async () => {
        let response = await roomService.getAll();
        setRoom(response);
    }


    return (
        <div className="content row">
            {villa.map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Diện tích : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="SỬA"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="XÓA"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {house.map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Diện tích : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="SỬA"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="XÓA"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {room.map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Diện tích : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="SỬA"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="XÓA"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}