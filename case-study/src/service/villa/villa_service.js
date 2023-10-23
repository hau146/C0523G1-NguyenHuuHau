const lease = ["giờ", "ngày", "tháng", "năm"];
const villaList = [
    {
        id: 1,
        img: "https://i.pinimg.com/564x/d7/fb/60/d7fb60186152d51bdfbc1974957f432f.jpg",
        title: "OCEAN SUTIE",
        size: 85.8,
        rentPrice: 3400000,
        numberPeople: 12,
        lease: lease[0],
        roomStandard: "buffet free, hồ bơi phía sau",
        describe: "thiết kế rộng rãi",
        poolVolume: 45.4,
        numberFloors: 4
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/62/b9/b0/62b9b094db09fef8672ce69d6c81fb10.jpg",
        title: "OCEAN STUDIO SUTIE",
        size: 40.1,
        rentPrice: 5500000,
        numberPeople: 7,
        lease: lease[2],
        roomStandard: "hồ bơi view thành phố, đồ ăn miễn phí",
        describe: "bãi đổ xe, quầy bar ở tầng thượng",
        poolVolume: 25.3,
        numberFloors: 3
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/cb/35/ab/cb35abfbc8483c7d7afa458cd36ac579.jpg",
        title: "OCEAN DELUXE",
        size: 43.7,
        rentPrice: 3200000,
        numberPeople: 10,
        lease: lease[1],
        roomStandard: "cửa tự động, thực đơn free 20h mỗi ngày",
        describe: "biệt thự rộng rãi, hồ bơi siêu đẹp",
        poolVolume: 17.4,
        numberFloors: 3
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/a5/0a/a1/a50aa1979eea53a5f666dd32885892a5.jpg",
        title: "GARDEN DELUXE",
        size: 45.1,
        rentPrice: 12000000,
        numberPeople: 14,
        lease: lease[3],
        roomStandard: "phòng hiện đại, bồn tắm view phố",
        describe: "có ghế ngồi uống trà trên hồ bơi",
        poolVolume: 25,
        numberFloors: 5
    }
]
export function getAll() {
    return villaList;
}
export function create(villa){
    villaList.push(villa);
}
