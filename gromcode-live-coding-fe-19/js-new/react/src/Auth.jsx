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

//algo
  //1.show Login by default
  //2. after Login clock - show Spinner for 2 seconds
  //3. hide Spinner, show Logout
  //4. after Logout click - show Login

//in: obj;
  //out: undef

  //setState мержит обьекты (добавляет новый)
  //setState async,
  loginHandler = () => {
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

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render(){
    const button = this.state.isLoggedIn
        ? (<Logout onLogout={() => this.logoutHandler()} />)
        : (<Login onLogin={() => this.loginHandler()} />);
    return (
        <div className="panel">
          {this.state.isSpinnerOn && <Spinner size={'30px'} />}
          {button}
        </div>
    );
  }
}

export default Auth;

