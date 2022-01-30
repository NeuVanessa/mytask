import React from "react";

//styles
import "./styles.css";
const Header = () => {
  const handleLogout = () => {
    localStorage.clear();
    if (localStorage.getItem()) {
      window.location.reload();
    }
    return "you were logout";
  };

  console.log(handleLogout);
  return (
    <div>
      <h1>TODO LIST - REACTJS</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Header;
