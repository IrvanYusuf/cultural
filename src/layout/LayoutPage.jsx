import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const LayoutPage = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
