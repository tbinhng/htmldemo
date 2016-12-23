import React from 'react';
import Login from '../Login/Login.jsx';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(isLogin) {
    this.setState({
      isLogin: isLogin
    });
  }

   render() {
      if (this.state.isLogin) {
        return (
           <div>
              <h1>Admin page</h1>
          </div>
        );
      } else {
        return (
           <div>
              <Login onLogin={this.handleLogin}></Login>
          </div>
        );
      }

   }
}

export default Admin;
