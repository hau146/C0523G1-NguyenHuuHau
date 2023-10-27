import * as customerService from '../../service/customer/customer_service'
import {LayoutManager} from "../manager/LayoutManager";
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {FormatDay} from "../format/FormatDay";

export function CustomerList() {
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [customer, setCustomer] = useState([]);
    let [typeCustomer, setTypeCustomer] = useState("")
    let [name, setName] = useState("");
    let idDelete = -1;

    useEffect(() =>{
        getAll();
    }, [name,typeCustomer]);

    const getAll = async () => {
        let data = await customerService.getAll(name,typeCustomer);
        setCustomer(data);
    }
    function handlePageClick() {

    }

    const deleteById = async id => {
        let status = await customerService.deleteCustomer(id);
        console.log("status" + status);
        if (status === 200){
            toast.success("Xóa thành công !");
            getAll();
        } else {
            toast.warning("Xóa thất bại !");
        }
    }

    const sendInfoToModal = async (id,name) => {
        console.log("OK" + id);
        document.getElementById("name_delete").innerText = name;
            idDelete = id;
        console.log(idDelete + " id đã có")
    }

    if(!customer) return null
    return (
        <div className="app-container">
            <LayoutManager/>
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Khách Hàng</h1>
                </div>

                <div className="app-content-actions">
                    <input onChange={(values) => setName(values.target.value)} className="search-bar" placeholder="Tìm tên khách hàng..." type="text"/>
                    <input style={{margin: "0 0 0 15px"}} onChange={(values) => setTypeCustomer(values.target.value)} className="search-bar" placeholder="Tìm loại khách hàng..." type="text"/>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton bg-dark">
                            <Link to="/createCustomer" className="link">Thêm khách hàng mới</Link>
                        </button>
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
                        <div className="product-cell price">Thao tác
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {customer.map((customer, index) => (
                        <div className="products-row" key={customer.id}>
                            <div className="product-index2">
                                {index + 1}
                            </div>
                            <div className="product-cell">
                                <span>{customer.name}</span>
                            </div>
                            <div className="product-cell">
                                {FormatDay(customer.date)}
                            </div>
                            <div className="product-cell">
                                {customer.gender ? <p>Nữ</p> : <p>Nam</p>}
                            </div>
                            <div className="product-cell">{customer.idCard}</div>
                            <div className="product-cell">{customer.numberPhone}</div>
                            <div className="product-cell">{customer.email}</div>
                            <div className="product-cell">{customer.typeCustomer.name}</div>
                            <div className="product-cell">{customer.address}</div>
                            <div className="product-cell" style={{width: "20px"}}>
                                <Link to={`/updateCustomer/${customer.id}`} className="nav-link">SỬA</Link>

                                <button onClick={(event) => sendInfoToModal(customer.id,customer.name)}
                                        style={{margin: "0 0 0 5px", background: "transparent",border: "none", color:"black",fontSize:"13px"}}
                                        type="button"
                                        className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="page">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="sau >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={10}
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
                        />
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Khách Hàng !</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" name="id_delete"/>
                            Bạn có chắc muốn xóa khách hàng <span id="name_delete" className="text-danger"></span> ?
                            <h5 style={{color:"red",fontSize:"19px"}}>Lưu ý : Hành động này không thể hoàn tác !</h5>
                        </div>
                        <div className="modal-footer">
                            <button style={{height:"47px"}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button
                                data-bs-dismiss="modal"
                                onClick={(event) => deleteById(idDelete)}
                                type="button"
                                className="btn btn-primary"
                                style={{height: "47px",width: "124px"}}
                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
