import * as customerService from '../../service/customer/customer_service'
import {LayoutManager} from "./LayoutManager";
import ReactPaginate from 'react-paginate';
import {useState} from "react";

export function Customer() {
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    function handlePageClick() {

    }

    let pageOffset;
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Khách Hàng</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Tìm tên khách hàng..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">Thêm khách hàng</button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên khách hàng
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell category">Ngày sinh
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell status-cell">Giới tính
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell sales">Số CMMD
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell stock">Số điện thoại
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Email
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Loại khách
                            <button className="sort-button">
                            </button>
                        </div>
                        <div className="product-cell price">Địa chỉ
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {customerService.getAll().map((customer, index) => (
                        <div className="products-row" key={customer.id}>
                            <div className="product-index2">
                                {index + 1}
                                {/*<span className="status active">{index + 1}</span>*/}
                            </div>
                            <div className="product-cell">
                                <span>{customer.name}</span>
                            </div>
                            <div className="product-cell">
                                {customer.date}
                            </div>
                            <div className="product-cell">
                                {customer.gender}
                            </div>
                            <div className="product-cell">{customer.idCard}</div>
                            <div className="product-cell">{customer.numberPhone}</div>
                            <div className="product-cell">{customer.email}</div>
                            <div className="product-cell">{customer.typeCustomer}</div>
                            <div className="product-cell">{customer.address}</div>
                        </div>
                    ))}
                    <div className="page">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="sau >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={80}
                            previousLabel="< trước"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            marginPagesDisplayed={2}
                            containerClassName="pagination"
                            activeClassName="active"
                            forcePage={pageOffset}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}