import '../css/table.css'
import * as customerService from '../../service/customer/customer_service'

export function Manager() {
    return (
        <div className="app-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="app-icon">
                        <img style={{height:"150px", width:"100%"}} src="https://i.pinimg.com/564x/11/44/4f/11444f6919d34fae88d70a8ab6f42013.jpg" alt=""/>
                    </div>
                </div>
                <ul className="sidebar-list">
                    <div className="input">
                        <button className="value">
                            Home
                        </button>
                        <button className="value">
                            Customer
                        </button>
                        <button className="value">
                            Contract
                        </button>
                        <button className="value">
                            Villa
                        </button>
                        <button className="value">
                            House
                        </button>
                        <button className="value">
                            Room
                        </button>
                    </div>
                </ul>
                <div className="account-info">
                    <div className="account-info-picture">
                        <img src="https://i.pinimg.com/564x/72/ae/1b/72ae1bdc5e87552c098e6ac6e41db8b6.jpg"
                             alt="Account"/>
                    </div>
                    <div className="account-info-name">Hau Nguyen.</div>
                </div>
            </div>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Customers</h1>
                </div>

                <div className="app-content-actions">
                    <input className="search-bar" placeholder="Search..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">Add Customer</button>
                    </div>
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-index">#
                        </div>
                        <div className="product-cell image">Tên
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
                            <div className="product-index">
                                {index + 1}
                            </div>
                            <div className="product-cell">
                                <span>{customer.name}</span>
                            </div>
                            <div className="product-cell">
                                {customer.date}
                            </div>
                            <div className="product-cell">
                                <span className="status active">{customer.gender}</span>
                            </div>
                            <div className="product-cell">{customer.idCard}</div>
                            <div className="product-cell">{customer.numberPhone}</div>
                            <div className="product-cell">{customer.email}</div>
                            <div className="product-cell">{customer.typeCustomer}</div>
                            <div className="product-cell">{customer.address}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}