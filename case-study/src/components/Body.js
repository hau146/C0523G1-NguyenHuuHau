import * as villaService from '../service/villa/villa_service'
import * as houseService from '../service/house/house_service'
import * as roomService from '../service/room/room_service'

export function Body() {
    return (
        <div className="content row">
            {villaService.getAll().map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="EDIT"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="DELETE"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {houseService.getAll().map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="EDIT"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="DELETE"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {roomService.getAll().map(facility => (
                <div className="container col-3" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "190px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Room size : {facility.size} m<sup>2</sup></p>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="EDIT"></p></button>
                                </div>
                                <div className="buttons">
                                    <button className="btn"><span></span><p data-start="good luck!" data-text="CLICK"
                                                                            data-title="DELETE"></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}