import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <p>My Todolist</p>
        <p>React</p>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
