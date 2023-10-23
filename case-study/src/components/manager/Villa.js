import * as villaService from '../../service/villa/villa_service'
import {LayoutManager} from "./LayoutManager";
import {Link} from "react-router-dom";
export function Villa() {
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Biệt Thự</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Tìm tên biệt thự..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">
                            <Link to="/createVilla" className="link">Thêm biệt thự mới</Link>
                        </button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên biệt thự
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
                        <div className="product-cell price">Tiêu chuẩn biệt thự
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Tiện nghi
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Diện tích hồ bơi
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Số tầng
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {villaService.getAll().map((villa, index) => (
                        <div className="products-row" key={villa.id}>
                            <div className="product-index2">
                                {index + 1}
                                {/*<span className="status active">{index + 1}</span>*/}
                            </div>
                            <div className="product-cell">
                                <img src={villa.img} alt=""/>
                                <span>{villa.title}</span>
                            </div>
                            <div className="product-cell">
                                {villa.size} m<sup>2</sup>
                            </div>
                            <div className="product-cell">
                                {villa.rentPrice}
                            </div>
                            <div className="product-cell">{villa.numberPeople}</div>
                            <div className="product-cell">{villa.lease}</div>
                            <div className="product-cell">{villa.roomStandard}</div>
                            <div className="product-cell">{villa.describe}</div>
                            <div className="product-cell">{villa.poolVolume} m<sup>2</sup></div>
                            <div className="product-cell">{villa.numberFloors}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}