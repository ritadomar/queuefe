// rfce

import React, { useContext } from 'react';
import logo from '../assets/animated-logo-small.gif';
import { AuthContext } from '../context/auth.context';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <h1 aria-label="Rita & Lobo's Game Night" className="sr-only"></h1>
      <img src={logo} alt="Rita & Lobo's Game Night" />
      {isLoggedIn && (
        <>
          <div className="user-icon">
            <div className="avatar">{user.name.slice(0, 1)}</div>
            <p>{user.name}</p>
          </div>
          <button className="secondary" onClick={logOutUser}>
            Log Out
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
