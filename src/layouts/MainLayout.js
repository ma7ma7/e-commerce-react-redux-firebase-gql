import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
