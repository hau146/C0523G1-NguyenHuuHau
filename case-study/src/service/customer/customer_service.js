const typeCustomer = ["Member", "Silver", "Gold", "Platinum", "Diamond"]
const gender = ["Nam", "Nữ"]
const customerList = [
    {
        id: 1,
        name: "Nguyễn Hữu Hậu",
        date: "24-02-2002",
        gender: gender[0],
        idCard: "044202932019",
        numberPhone: "0911111111",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "23 Ngô Quyền, TP. Đà Nẵng"
    },
    {
        id: 2,
        name: "Trịnh Đình Tuấn",
        date: "21-11-2002",
        gender: gender[0],
        idCard: "046808088993",
        numberPhone: "0909393939",
        email: "tuantd@gmail.com",
        typeCustomer: typeCustomer[0],
        address: "53 Ngô Quyền, TP. Huế, Thừa Thiên Huế"
    },
    {
        id: 3,
        name: "Trần Tứ Xuyên",
        date: "22-02-1994",
        gender: gender[1],
        idCard: "048089888991",
        numberPhone: "0965757575",
        email: "xuyentt@gmail.com",
        typeCustomer: typeCustomer[1],
        address: "217 Nguyễn Thị Minh Khai, TP. Đà Nẵng"
    },
    {
        id: 4,
        name: "Bùi Thanh Tâm",
        date: "23-12-2001",
        gender: gender[1],
        idCard: "046109088289",
        numberPhone: "0959595959",
        email: "tambt@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "53 Nguyễn Văn Cừ, TP. Huế, Thừa Thiên Huế"
    },
    {
        id: 5,
        name: "Vũ Văn Thông",
        date: "19-01-2000",
        gender: gender[0],
        idCard: "048909088899",
        numberPhone: "0991919191",
        email: "thongvv@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "76 Hùng Vương, TP. Đà Nẵng"
    },
    {
        id: 6,
        name: "Bùi Thanh Quang",
        date: "24-02-1995",
        gender: gender[0],
        idCard: "048089888895",
        numberPhone: "0967676767",
        email: "quangbt@gmail.com",
        typeCustomer: typeCustomer[2],
        address: "90 Nguyễn Tất Thành, TP. Đà Nẵng"
    },
    {
        id: 7,
        name: "Nguyễn Hữu Hậu",
        date: "20-12-1999",
        gender: gender[1],
        idCard: "044202932019",
        numberPhone: "0911111111",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "23 Ngô Quyền, TP. Đà Nẵng"
    },
    {
        id: 8,
        name: "Nguyễn Hữu Hậu",
        date: "24-02-2002",
        gender: gender[1],
        idCard: "044202932019",
        numberPhone: "0911111111",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "23 Ngô Quyền, TP. Đà Nẵng"
    },
    {
        id: 9,
        name: "Nguyễn Hữu Hậu",
        date: "24-02-2002",
        gender: gender[0],
        idCard: "044202932019",
        numberPhone: "0911111111",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "23 Ngô Quyền, TP. Đà Nẵng"
    },
    {
        id: 10,
        name: "Nguyễn Hữu Hậu",
        date: "24-02-2002",
        gender: gender[1],
        idCard: "044202932019",
        numberPhone: "0911111111",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "23 Ngô Quyền, TP. Đà Nẵng"
    }
]
export function getAll() {
    return customerList;
}
