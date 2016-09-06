
import './register.styl';
import React from 'react';

class register extends React.Component {
  render() {
    return (
      <div className="register">
        <div className="header">
          <div className="header1"></div>
          <div className="header2"></div>
        </div>
        <div className="body">
          {
            // <div className="field">
            //   <input type="text" placeholder="用户名"/>
            // </div>
          }
          <div className="field">
            <input type="text" placeholder="用户名"/>
          </div>
          <div className="field">
            <input type="text" placeholder="邮箱"/>
          </div>
          <div className="field">
            <input type="text" placeholder="密码"/>
          </div>
          <div className="field">
            <input type="text" placeholder="确认密码"/>
          </div>
          <div className="field">
            <input type="button" value="立即注册"/>
          </div>
        </div>
      </div>
    );
  }
}

export default register;
