// rfce

import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/animated-logo-small.gif';
import { AuthContext } from '../context/auth.context';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, [user]);

  return (
    <nav>
      <div className="image">
        <img src={logo} alt="Rita & Lobo's Game Night" className="logo" />
      </div>
      {isLoggedIn && (
        <div className="profile">
          <div
            className="avatar"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {user.name.slice(0, 1)}
          </div>
          {open && (
            <button className="secondary logout" onClick={logOutUser}>
              Log Out
            </button>
          )}
        </div>
      )}
      {/* <img src={logo} alt="Rita & Lobo's Game Night" className="logo" /> */}
    </nav>
  );
}

export default Navbar;
