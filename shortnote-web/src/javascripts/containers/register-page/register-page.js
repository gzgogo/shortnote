
import './register-page.styl';
import React from 'react';
import Register from '../../components/register/register';

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="register-page">
        {
          //<div className="page-header">
          //  <p className="title">极速笔记</p>
          //  <p className="sub-title">注册</p>
          //</div>
        }

        <Register></Register>
      </div>
    );
  }
}

export default RegisterPage;
