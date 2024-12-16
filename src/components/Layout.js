import React from "react";
import Header from "./Header"; // Import your Header component
import Footer from "./Footer"; // Import your Footer component

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
