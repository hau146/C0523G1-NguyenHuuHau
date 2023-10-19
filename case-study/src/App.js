import './App.css';
import './components/css/room.css'
import CreateRoom from "./components/room/CreateRoom";
import CreateHouse from "./components/house/CreateHouse";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
let facility = [
    {
        id: 1,
        img: "https://i.pinimg.com/564x/d7/fb/60/d7fb60186152d51bdfbc1974957f432f.jpg",
        title: "OCEAN SUTIE",
        size: 85.8
    },
    {
        id: 2,
        img: "https://i.pinimg.com/564x/62/b9/b0/62b9b094db09fef8672ce69d6c81fb10.jpg",
        title: "OCEAN STUDIO SUTIE",
        size: 40.1
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/cb/35/ab/cb35abfbc8483c7d7afa458cd36ac579.jpg",
        title: "OCEAN DELUXE",
        size: 43.7
    },
    {
        id: 4,
        img: "https://i.pinimg.com/564x/a5/0a/a1/a50aa1979eea53a5f666dd32885892a5.jpg",
        title: "GARDEN DELUXE",
        size: 40.1
    }
]

function App() {
    return (
        <div>
            <Header/>
            <Body facility={facility}/>
            <Footer/>
        </div>
    );
}

export default App;
