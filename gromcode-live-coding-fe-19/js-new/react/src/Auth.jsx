import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

//in: none

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSpinnerOn: false,
    };
  }
// state - это обьект, и нам нужно придумать ему ключи
  //isLoggedIn: bool
  //isSpinnerOn: bool (на какой стадии авторизация -isProcessing,загрузился или нет)
  //
  //

  handleLogin = () => {
    this.setState({
      isLoggedIn: false,
      isSpinnerOn: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isSpinnerOn: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      isSpinnerOn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn
        ? (<Logout onLogout={() => this.handleLogout()} />)
        : (<Login onLogin={() => this.handleLogin()} />);

    return (
      <div className="panel">
        {this.state.isSpinnerOn && <Spinner size={'30px'} />}
        {button}
      </div>
    );
  }
}

export default Auth;

// const button = this.state.isLoggedIn === true
//     ? <button className="logout btn" onClick={this.handleLogout}>Logout</button>
//     : <button className="login btn" onClick={this.handleLogin}>Login</button>
