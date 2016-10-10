
import './login.styl';
import React from 'react';
import crypto from 'crypto';
import httpUtil from '../../utils/httpUtil';

class login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: ''
    }
  }

  render() {
    return (
      <div className="login">
        <div className="register">
          {
            <div className="header">
              <div className="header1"></div>
              <div className="header2"></div>
            </div>
          }

          <div className="body">
            <div className="field">
              <div className="error">
                {this.state.errorMsg}
              </div>
            </div>
            <div className="field">
              <input type="text" placeholder="邮箱" ref="email"/>
            </div>
            <div className="field">
              <input type="text" placeholder="密码" ref="password"/>
            </div>
            <div className="field">
              <input type="button" value="登录" onClick={this.handleLogin.bind(this)}/>
            </div>
            <div className="field-register">
              <a href="/register">创建新用户</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleLogin() {
    if (this.checkValidity()) {
      var email = this.refs.email.value;
      var password = this.refs.password.value;

      var sha1 = crypto.createHash('sha1');
      sha1.update(password).update('f4b40411e28a4942a2d51da213a5480c');
      password = sha1.digest('hex');

      var success = function () {
        window.location = '/notes';
      }.bind(this);

      var fail = function (msg) {
        this.setState({errorMsg: msg});
      }.bind(this);

      httpUtil.login(email, password, success, fail);
    }
  }

  checkValidity() {
    var valid = false;

    // var name = this.refs.name.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;

    if (email.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
      this.setState({errorMsg: "邮箱不能为空"});
    }
    else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
      this.setState({errorMsg: "邮箱格式错误"});
    }
    else if (password.replace(/(^\s*)|(\s*$)/g, "").length < 6) {
      this.setState({errorMsg: "密码至少为6位"});
    }
    else {
      this.setState({errorMsg: ''});
      valid = true;
    }

    return valid;
  }
}

export default login;
