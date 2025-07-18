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
import Footer from "./components/Footer";
import Watches from "./components/Watches";
import Testimonial from "./components/Testimonial";

import AboutTimePods from "./components/AboutTimePods";
import ReturnRefundPolicy from "./components/ReturnRefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsConditions";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navbar />

      <div className="max-w-[1430px] mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="/about" element={<AboutTimePods />} />
          <Route path="/return-refund" element={<ReturnRefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
