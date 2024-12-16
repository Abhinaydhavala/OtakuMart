import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OtakuSpa from "./spa/OtakuSpa";
import CardGrid from "./components/common/CardGrid";

function App() {
  return (
    <Router>
      <div>
        {/* Header at the top */}
        <Header />

        {/* Routes for different pages */}
        <Routes>
          {/* Main SPA Page */}
          <Route path="/" element={<OtakuSpa />} />

          {/* Product Details or any other reusable page */}
          <Route path="/details" element={<CardGrid />} />
        </Routes>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
