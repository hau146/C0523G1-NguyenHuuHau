import * as houseService from '../../../service/house/house_service'
import {LayoutManager} from "../../manager/LayoutManager";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export function HouseList() {
    const [house, setHouse] = useState([]);
    let idDelete = -1;
    let titleDelete = "";
    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        let response = await houseService.getAll();
        setHouse(response);
    }

    function sendInfoToModal(id, title) {
        document.getElementById("title_delete").innerText = title;
        titleDelete = title
        idDelete = id;
    }

    const deleteById = async (idDelete) => {
        let status = await houseService.deleteHouse(idDelete);
        console.log(status);
        if (status === 200) {
            toast.success(`Xóa thành công dịch vụ ${titleDelete} !`);
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
                        <div className="product-cell price">Thao tác
                            <button className="sort-button">
                            </button>
                        </div>
                    </div>
                    {house.map((house, index) => (
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
                            <div className="product-cell" style={{width: "20px"}}>
                                <Link to={`/updateHouse/${house.id}`} className="nav-link">SỬA</Link>

                                <button onClick={(event) => sendInfoToModal(house.id, house.title)}
                                        style={{
                                            margin: "0 0 0 5px",
                                            background: "transparent",
                                            border: "none",
                                            color: "black",
                                            fontSize: "13px"
                                        }}
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa Dịch Vụ !</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" name="id_delete"/>
                            Bạn có chắc muốn xóa dịch vụ <span id="title_delete" className="text-danger"></span> này?
                            <h5 style={{color: "red", fontSize: "21px"}}>Lưu ý : Hành động này không thể hoàn tác !</h5>
                        </div>
                        <div className="modal-footer">
                            <button style={{height: "47px"}} type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Hủy
                            </button>
                            <button
                                data-bs-dismiss="modal"
                                onClick={(event) => deleteById(idDelete)}
                                type="button"
                                className="btn btn-primary"
                                style={{height: "47px", width: "124px"}}
                            >Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}