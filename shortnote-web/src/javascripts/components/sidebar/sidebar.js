
import './sidebar.styl';
import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <i className="icon iconfont icon-add" onClick={e=>this.onAddNote()}></i>
      </div>
    );
  }

  onAddNote() {
    if (typeof this.props.onAddNote === 'function') {
      this.props.onAddNote();
    }
  }
}

export default Sidebar;
