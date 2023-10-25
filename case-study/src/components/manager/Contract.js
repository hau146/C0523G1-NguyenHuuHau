import * as contractService from '../../service/contract/contract_service'
import {LayoutManager} from "./LayoutManager";
import {Link} from "react-router-dom";
export function Contract() {
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Hợp Đồng Furama</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Tìm hợp đồng..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">
                            <Link to="/createContract" className="link">Thêm hợp đồng mới</Link>
                        </button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên hợp đồng
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell category">Ngày bắt đầu thuê
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell status-cell">Ngày kết thúc thuê
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell sales">Giá đặt cọc (vnđ)
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Tổng tiền thanh toán (vnđ)
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Thao tác
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {contractService.getAll().map((contract, index) => (
                        <div className="products-row" key={contract.id}>
                            <div className="product-index2">
                                {index + 1}
                                {/*<span className="status active">{index + 1}</span>*/}
                            </div>
                            <div className="product-cell">
                                <span>{"Đang làm"}</span>
                            </div>
                            <div className="product-cell">
                                {contract.startDay}
                            </div>
                            <div className="product-cell">
                                {contract.endDay}
                            </div>
                            <div className="product-cell">{contract.deposit}</div>
                            <div className="product-cell">{contract.totalPrice}</div>
                            <div className="product-cell">
                                <Link to="/customer" className="nav-link">Sửa</Link>
                                <Link to="/customer" className="nav-link" style={{margin:"0 0 0 25px"}}>Xóa</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}