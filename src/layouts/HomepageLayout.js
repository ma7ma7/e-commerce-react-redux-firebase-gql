import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

function HomepageLayout({ children }) {
  return (
    <div className="fullHeight">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomepageLayout;
