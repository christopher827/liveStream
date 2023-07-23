import {Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/home/homePage";
import RoomPage from "./pages/home/room/RoomPage";

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/room/:roomId" element={<RoomPage/>}/>
</Routes>
    </div>
);
}

export default App;
