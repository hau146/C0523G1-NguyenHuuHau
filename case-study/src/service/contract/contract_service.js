const contractList = [
    {
        id: 1,
        startDay: "01-01-2022",
        endDay: "01-03-2022",
        deposit: 2000000,
        totalPrice: 10000000
    },
    {
        id: 2,
        startDay: "12-12-2020",
        endDay: "20-12-2020",
        deposit: 5000000,
        totalPrice: 15000000
    },
    {
        id: 3,
        startDay: "12-01-2023",
        endDay: "20-05-2023",
        deposit: 30000000,
        totalPrice: 50000000
    }
]
export function getAll() {
    return contractList;
}
export function create(element) {
    return contractList.push(element);
}
