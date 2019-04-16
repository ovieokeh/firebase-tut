/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import fBase from '../utilities/firebase';

function Protected() {
  const onSignOut = () => {
    fBase.auth().signOut();
    window.location.pathname = '/';
  };

  return (
    <div className="protected">
      <p>Welcome to the exclusive VIP section.</p>
      <Link className="links" to="/">Take me Home</Link>
      <button
        type="button"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Protected;
