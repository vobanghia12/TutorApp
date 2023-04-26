import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-[1.2rem] font-bold mr-2 text-blue-200">
          TutorKing
        </div>
      </div>
      {user ? (
        <ul className="flex list-none absolute right-8 font-medium">
          <li className=" mr-5">
            <p>
              Hi <span>{user[0].username}</span>
            </p>
          </li>
          <li>
            <Link to="/Logout">Log Out</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex list-none absolute right-8 font-medium">
          <li className=" mr-5">
            <Link to="/Login">Log In</Link>
          </li>
          <li>
            <Link to="/choices">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
