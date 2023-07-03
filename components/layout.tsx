import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="lg:w-8/12 lg:mx-auto mb-8">
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
