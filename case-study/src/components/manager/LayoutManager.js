import {Link} from "react-router-dom";
import '../css/table.css'
export function LayoutManager(){
    return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="app-icon">
                        <img style={{height:"150px", width:"100%"}} src="https://i.pinimg.com/564x/11/44/4f/11444f6919d34fae88d70a8ab6f42013.jpg" alt=""/>
                    </div>
                </div>
                <ul className="sidebar-list">
                    <div className="input">
                        <Link className="value" to="/">
                            Trang chủ
                        </Link>
                        <Link className="value" to="/customer">
                            Khách hàng
                        </Link>
                        <Link className="value" to="/contract">
                            Hợp đồng
                        </Link>
                        <Link className="value" to="/villa">
                            Biệt thự
                        </Link>
                        <Link className="value" to="/house">
                            Nhà
                        </Link>
                        <Link className="value" to="/room">
                            Phòng
                        </Link>
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
    )
}