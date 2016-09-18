
import './register.styl';
import React from 'react';
import crypto from 'crypto';
import httpUtil from '../../utils/httpUtil';

class register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: ''
    }
  }

  render() {
    return (
      <div className="register">
        <div className="header">
          <div className="header1"></div>
          <div className="header2"></div>
        </div>
        <div className="body">

          <div className="field">
            <div className="error">
              {this.state.errorMsg}
            </div>
          </div>
          {
            // <div className="field">
            //   <input type="text" placeholder="用户名" ref="name"/>
            // </div>
          }
          <div className="field">
            <input type="text" placeholder="邮箱" ref="email"/>
          </div>
          <div className="field">
            <input type="password" placeholder="密码" ref="password"/>
          </div>
          <div className="field">
            <input type="password" placeholder="确认密码" ref="confirmPassword"/>
          </div>
          <div className="field">
            <input type="button" value="立即注册" onClick={this.handleRegister.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  handleRegister() {
    httpUtil.register();
    if (this.checkValidity()) {

      var email = this.refs.email.value;
      var password = this.refs.password.value;

      var sha1 = crypto.createHash('sha1');
      sha1.update(password).update('f4b40411e28a4942a2d51da213a5480c');

      password = sha1.digest('hex');

      var success = function () {

      }.bind(this);

      var fail = function (msg) {
        this.setState({errorMsg: msg});
      }.bind(this);
      httpUtil.register(email, password, success, fail);
    }
  }

  checkValidity() {
    var valid = false;

    // var name = this.refs.name.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    var confirmPassword = this.refs.confirmPassword.value;

    // if (name.replace(/(^\s*)|(\s*$)/g, "").length ==0) {
    //   this.setState({errorMsg: "用户名不能为空"});
    // }
    // else if (!/[a-z0-9A-Z_]+/.test(name)) {
    //   this.setState({errorMsg: "用户名只能使用数字、英文字母或下划线"});
    // }
    // else
    if (email.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
      this.setState({errorMsg: "邮箱不能为空"});
    }
    else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
      this.setState({errorMsg: "邮箱格式错误"});
    }
    else if (password.replace(/(^\s*)|(\s*$)/g, "").length < 8) {
      this.setState({errorMsg: "密码至少为8位"});
    }
    else if (confirmPassword.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
      this.setState({errorMsg: "请再次输入密码进行确认"});
    }
    else if (password !== confirmPassword) {
      this.setState({errorMsg: "两次密码不相同"});
    }
    else {
      this.setState({errorMsg: ''});
      valid = true;
    }

    return valid;
  }
}

export default register;
