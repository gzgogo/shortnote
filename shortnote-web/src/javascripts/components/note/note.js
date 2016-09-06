
import './note.styl';
import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <input className="note-header" type="text" defaultValue={this.props.note.header}/>
        <textarea className="note-body" name="content" id="content" defaultValue={this.props.note.body}></textarea>

        {
          // <div className="note-footer"></div>
        }
      </div>
    );
  }
}

export default Note;
