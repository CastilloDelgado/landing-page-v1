import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto bg-blue-100">{children}</div>
    </div>
  );
};

export default Layout;
