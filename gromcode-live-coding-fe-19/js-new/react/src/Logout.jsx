import React from 'react';

//in:  obj({onLogout: callback}}

const Logout = props => (
  <button className="logout btn" onClick={props.onLogout}>
    Logout
  </button>
);

export default Logout;
