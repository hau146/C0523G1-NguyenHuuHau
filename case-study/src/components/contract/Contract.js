import * as contractService from '../../service/contract/contract_service'
import {LayoutManager} from "../manager/LayoutManager";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {FormatDay} from "../format/FormatDay";
import {toast} from "react-toastify";

export function Contract() {
    const [contract, setContract] = useState([]);
    let idDelete = -1;
    useEffect(() => {
        getAll();
    },[]);

    const getAll = async () => {
        let response = await contractService.getAll();
        setContract(response);
    }


    function sendInfoToModal(id, name) {
        document.getElementById("name_delete").innerText = name;
        idDelete = id;
        console.log(idDelete + " id đã có")
    }

    const deleteById = async (idDelete) => {
        let status = await contractService.deleteContract(idDelete);
        console.log(status);
        if (status === 200){
            toast.success(`Xóa thành công hợp đồng !`);
            getAll();
        } else {
            toast.warning("Xóa thất bại !");
        }
    }

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
                        <div className="product-cell category">Tên hợp đồng
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
                    {contract.map((contract, index) => (
                        <div className="products-row" key={contract.id}>
                            <div className="product-index2">
                                {index + 1}
                            </div>
                            <div className="product-cell">
                                {contract.name}
                            </div>
                            <div className="product-cell">
                                {FormatDay(contract.startDay)}
                            </div>
                            <div className="product-cell">
                                {FormatDay(contract.endDay)}
                            </div>
                            <div className="product-cell">{contract.deposit}</div>
                            <div className="product-cell">{contract.totalPrice}</div>
                            <div className="product-cell">
                                <Link to={`/updateContract/${contract.id}`} className="nav-link">SỬA</Link>

                                <button onClick={(event) => sendInfoToModal(contract.id,contract.name)}
                                        style={{margin: "0 0 0 5px", background: "transparent",border: "none", color:"black",fontSize:"13px"}}
                                        type="button"
                                        className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Hợp Đồng !</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" name="id_delete"/>
                            Bạn có chắc muốn xóa hợp đồng <span id="name_delete" className="text-danger"></span> này?
                            <h5 style={{color:"red",fontSize:"21px"}}>Lưu ý : Hành động này không thể hoàn tác !</h5>
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