const roomList = [
    {
        id: 1,
        img: "https://i.pinimg.com/564x/8a/28/f9/8a28f94fdbc874a2dbd4254d7403ef0f.jpg",
        title: "STANDARD",
        size: 13
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/30/1f/bb/301fbbc5bad2a63554482a288aa3c79e.jpg",
        title: "SUPERIOR",
        size: 20
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/a8/ff/d7/a8ffd7c5ed1e55f64af27383a9ff924b.jpg",
        title: "DELUXE",
        size: 36.2
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/5a/d3/91/5ad3911fc59945d8f8aab36db3f47d98.jpg",
        title: "TWIN ROOM",
        size: 29
    }
]
export function getAll() {
    return roomList;
}
