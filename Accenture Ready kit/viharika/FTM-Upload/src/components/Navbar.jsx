import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2>Task Manager Pro</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/profile">Profile</Link>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
