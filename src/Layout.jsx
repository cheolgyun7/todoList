import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <p>My Todolist</p>
        <p>React</p>
      </header>
      {children}
    </>
  );
};

export default Layout;
