import Navbar from "./components/Navbar";
import Card from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import News from "./pages/News";
import Devices from "./pages/Devices";
import Carousel from "./components/Carousel";
import Productsheading from "./components/Productsheading";
import Extras from "./components/Extras";
import Gift from "./components/Gift";
import Footer from './components/Footer'
import Watches from "./components/Watches";
import Testimonial from "./components/Testimonial";


function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar />

      {/* Main container for centering content on large screens */}
      <div className="max-w-[1430px] mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/devices" element={<Devices />} />
        </Routes>

      
      </div>

      <Footer />
    </div>
  );
}


export default App;
