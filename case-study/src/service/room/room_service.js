export const lease = ["giờ", "ngày", "tháng", "năm"];
const service = ["massage", "karaoke", "thức ăn", "nước uống", "tham quan resort"];
const roomList = [
    {
        id: 1,
        img: "https://i.pinimg.com/564x/8a/28/f9/8a28f94fdbc874a2dbd4254d7403ef0f.jpg",
        name: "STANDARD",
        size: 13,
        rentPrice: 500000,
        numberPeople: 3,
        lease: lease[1],
        freeService: service[0]
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/30/1f/bb/301fbbc5bad2a63554482a288aa3c79e.jpg",
        name: "SUPERIOR",
        size: 20,
        rentPrice: 200000,
        numberPeople: 2,
        lease: lease[0],
        freeService: service[2]
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/a8/ff/d7/a8ffd7c5ed1e55f64af27383a9ff924b.jpg",
        name: "DELUXE",
        size: 36.2,
        rentPrice: 880000,
        numberPeople: 4,
        lease: lease[1],
        freeService: service[4]
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/5a/d3/91/5ad3911fc59945d8f8aab36db3f47d98.jpg",
        name: "TWIN ROOM",
        size: 29,
        rentPrice: 735000,
        numberPeople: 4,
        lease: lease[2],
        freeService: service[3]
    }
]
export function getAll() {
    return roomList;
}
export function create(element) {
    return roomList.push(element);
}
