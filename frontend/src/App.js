import Navbar from "./components/Navbar";
import Card from "./components/Card";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from "./pages/Shop";
import News from "./pages/News";
import Devices from "./pages/Devices";

function App() {
  return (
    <div className="min-h-screen bg-gray-500 text-white">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/devices" element={<Devices/>} />
    </Routes>
    

    <Card/>
    </div>
  );
}

export default App;
