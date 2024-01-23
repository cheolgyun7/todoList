const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <p>Todo-List</p>
        <p>React</p>
      </div>
      {children}
    </>
  );
};

export default Layout;
