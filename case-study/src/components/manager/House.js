import * as houseService from '../../service/house/house_service'
import {LayoutManager} from "./LayoutManager";
import {Link} from "react-router-dom";
export function House() {
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Nhà</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Tìm tên nhà..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">
                            <Link to="/createHouse" className="link">Thêm nhà mới</Link>
                        </button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên nhà
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
                        <div className="product-cell price">Tiêu chuẩn nhà
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Tiện nghi
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Số tầng
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {houseService.getAll().map((house, index) => (
                        <div className="products-row" key={house.id}>
                            <div className="product-index2">
                                {index + 1}
                                {/*<span className="status active">{index + 1}</span>*/}
                            </div>
                            <div className="product-cell">
                                <img src={house.img} alt=""/>
                                <span>{house.title}</span>
                            </div>
                            <div className="product-cell">
                                {house.size} m<sup>2</sup>
                            </div>
                            <div className="product-cell">
                                {house.rentPrice}
                            </div>
                            <div className="product-cell">{house.numberPeople}</div>
                            <div className="product-cell">{house.lease}</div>
                            <div className="product-cell">{house.roomStandard}</div>
                            <div className="product-cell">{house.describe}</div>
                            <div className="product-cell">{house.numberFloors}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}