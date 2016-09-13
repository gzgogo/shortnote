
import './register.styl';
import React from 'react';

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
          <div className="field">
            <input type="text" placeholder="用户名" ref="name"/>
          </div>
          <div className="field">
            <input type="text" placeholder="邮箱" ref="email"/>
          </div>
          <div className="field">
            <input type="text" placeholder="密码" ref="password"/>
          </div>
          <div className="field">
            <input type="text" placeholder="确认密码" ref="confirmPassword"/>
          </div>
          <div className="field">
            <input type="button" value="立即注册" onClick={this.handleRegister.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  handleRegister() {
    var name = this.refs.name.value;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    var confirmPassword = this.refs.confirmPassword.value;


    if (name.replace(/(^\s*)|(\s*$)/g, "").length ==0) {
      this.setState({errorMsg: "用户名不能为空"});
    }
    else if (!/[a-z0-9A-Z_]+/.test(name)) {
      this.setState({errorMsg: "用户名只能使用数字、英文字母或下划线"});
    }
    else if (email.replace(/(^\s*)|(\s*$)/g, "").length ==0) {
      this.setState({errorMsg: "邮箱不能为空"});
    }
    else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
      this.setState({errorMsg: "邮箱格式错误"});
    }
    else if (password.replace(/(^\s*)|(\s*$)/g, "").length < 8) {
      this.setState({errorMsg: "密码至少为8位"});
    }
    else if (password !== confirmPassword) {
      this.setState({errorMsg: "两次密码不相同"});
    }
    else if (confirmPassword.replace(/(^\s*)|(\s*$)/g, "").length ==0) {
      this.setState({errorMsg: "请确认密码"});
    }
    else {
      this.setState({errorMsg: ''});
    }

  }
}

export default register;
