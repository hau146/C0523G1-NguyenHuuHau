import * as roomService from '../../service/room/room_service'
import {LayoutManager} from "./LayoutManager";
import {Link} from "react-router-dom";
export function Room() {
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Phòng</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Tìm tên phòng..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">
                            <Link to="/createRoom" className="link">Thêm phòng mới</Link>
                        </button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên phòng
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell category">Diện tích
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell status-cell">Giá cho thuê
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell sales">Số người thuê
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Thuê theo
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Dịch vụ đi kèm
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {roomService.getAll().map((room, index) => (
                        <div className="products-row" key={room.id}>
                            <div className="product-index2">
                                {index + 1}
                                {/*<span className="status active">{index + 1}</span>*/}
                            </div>
                            <div className="product-cell">
                                <img src={room.img} alt=""/>
                                <span>{room.title}</span>
                            </div>
                            <div className="product-cell">
                                {room.size} m<sup>2</sup>
                            </div>
                            <div className="product-cell">
                                {room.rentPrice}
                            </div>
                            <div className="product-cell">{room.numberPeople}</div>
                            <div className="product-cell">{room.lease}</div>
                            <div className="product-cell">{room.freeService}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}