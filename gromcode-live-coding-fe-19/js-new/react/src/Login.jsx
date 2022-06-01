import React from 'react';

//in:  obj({onLogin: callback}}               obj (callback)
//out: JSX

const Login = props => {
    //console.log(props) // {onLogin: f}
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
