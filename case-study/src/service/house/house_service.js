const lease = ["giờ", "ngày", "tháng", "năm"];
const houseList = [
    {
        id: 1,
        img: "https://i.pinimg.com/564x/0f/66/cd/0f66cdbacabd20bea166fe11b0c932be.jpg",
        title: "LOS ANGELES",
        size: 30.4,
        rentPrice: 2000000,
        numberPeople: 5,
        lease: lease[2],
        roomStandard: "sạch sẽ, thoáng mát",
        describe: "có bồn tắm hơi, có bãi đổ xe riêng",
        numberFloors: 2
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/bf/af/83/bfaf83b85c66c290d37910bea712e049.jpg",
        title: " DUBAI",
        size: 35,
        rentPrice: 5500000,
        numberPeople: 7,
        lease: lease[3],
        roomStandard: "có điều hòa, minibar",
        describe: "kính mặt trời, có bãi đổ xe lamborghini",
        numberFloors: 3
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/f7/40/76/f74076e5033b662fbf04c13837203a0d.jpg",
        title: "BAHAMAS",
        size: 41.1,
        rentPrice: 3200000,
        numberPeople: 7,
        lease: lease[2],
        roomStandard: "bồn tắm view biển, nhà đẹp",
        describe: "rộng rãi, thiết kế hiện đại hàn xẻng",
        numberFloors: 2
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/a7/88/fc/a788fc2d1eacb370629dd37c11ac1468.jpg",
        title: "CALIFORNIA",
        size: 34.2,
        rentPrice: 10000000,
        numberPeople: 14,
        lease: lease[2],
        roomStandard: "bếp hiện đại, có nhà mini pet, ban công view sân bay",
        describe: "thiết kế đẳng cấp vippro, siêu sang xịn mịn",
        numberFloors: 4
    }
]
export function getAll() {
    return houseList;
}
