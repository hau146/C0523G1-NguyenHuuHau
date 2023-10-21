function CreateRoom() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-2">

            </div>

            <div className="col-lg-6 col-md-8 form">
                <div className="row">
                    <div className="col-sm-4 form-create">
                        <p></p>
                    </div>

                    <div className="col-sm-8 p-0 form-input">
                        <form>
                            <div className="form-header bg-dark">
                                <h2 className="text-light fw-bold ms-3">Thêm mới phòng</h2>
                            </div>

                            <div className="form-body bg-light p-3">
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Tên Dịch vụ :</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>


                            <div className="form-body bg-light p-3">
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Diện tích :</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-body bg-light p-3">
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Chi phí cho thuê :</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-body bg-light p-3">
                                <div className="row mb-3">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">Dịch vụ đi kèm :</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-footer bg-dark p-3">
                                <div>
                                    <a href="" className="btn btn-secondary me-5">Quay lại</a>

                                    <button className="btn btn-secondary me-5">
                                        <span>Thêm</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;