
import './login-page.styl';
import React from 'react';
import Login from '../../components/login/login';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="page-header">
          <p className="title">极速笔记</p>
          <p className="sub-title">登录</p>
        </div>
        <Login></Login>
      </div>
    );
  }
}

export default LoginPage;
