import './App.css';
import './components/css/button.css'
// import './components/css/room.css'
import CreateRoom from "./components/room/CreateRoom";
import CreateHouse from "./components/house/CreateHouse";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Body} from "./components/Body";

function App() {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
