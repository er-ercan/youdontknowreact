import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  return (
    <>
      <NavLink
        activeClassName="activeClassName"
        activeStyle={{ color: "black" }}
        to="/"
      >
        Go Home
      </NavLink>
      <Link to="user/react-router">Go to the React Router user</Link>
      <Link to="/mistakes">Mistakes</Link>
      <Link to="/contextExample">Context Example</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/user/${user}`);
        }}
      >
        <input
          placeholder="input a username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button disabled={!user}>Go to that user</button>
        Page 58 of 204
      </form>
      <Outlet />
    </>
  );
};
export default Home;
