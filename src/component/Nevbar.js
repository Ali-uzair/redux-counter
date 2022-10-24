import React from "react";
import { useSelector } from 'react-redux'
// import { Link } from "react-router-dom";

const NavBar = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand">
            Posts
          </Link> */}
          hey
        </div>
        <div>
          <button disabled= {true} className="nav-link" >balance : {amount}</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
