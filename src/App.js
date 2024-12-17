import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter properly
import Layout from "./components/Layout"; // Import the Layout component
import OtakuSpa from "./spa/OtakuSpa";
import AboutUs from "./spa/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <OtakuSpa />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
