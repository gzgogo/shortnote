
import './index-page.styl';
import React from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <div className="index-page">
        <h2><a href="/login">登录</a></h2>
        <h2><a href="/register">注册</a></h2>
      </div>
    );
  }
}

export default IndexPage;
