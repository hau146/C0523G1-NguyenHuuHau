import {Link} from "react-router-dom";

function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">FACILITIES</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/customer" className="nav-link">Khách hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contract" className="nav-link">Hợp đồng</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Cơ sở Furama
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/villa" className="dropdown-item">Biệt thự</Link>                                    </li>
                                    <li>
                                        <Link to="/house" className="dropdown-item">Nhà</Link>                                    </li>
                                    <li>
                                        <Link to="/room" className="dropdown-item">Phòng</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Tìm cơ sở..." aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;