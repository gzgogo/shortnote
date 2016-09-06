
import './login.styl';
import React from 'react';

class login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="register">
          <div className="header">
            <div className="header1"></div>
            <div className="header2"></div>
          </div>
          <div className="body">
            <div className="field">
              <input type="text" placeholder="邮箱"/>
            </div>
            <div className="field">
              <input type="text" placeholder="密码"/>
            </div>
            <div className="field">
              <input type="button" value="登录"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
