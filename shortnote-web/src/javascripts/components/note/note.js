
import './note.styl';
import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <div className="btn-close"></div>
        <input className="note-header" type="text" defaultValue={this.props.note.header}/>
        <textarea className="note-body"
                  name="content"
                  id="content"
                  ref="body"
                  defaultValue={this.props.note.body}
                  onInput={e=>this.handleInputChange(this.props.note)}></textarea>

        {
          // <div className="note-footer"></div>
        }
      </div>
    );
  }

  handleInputChange(note) {
    var body = this.refs.body.value;
    note.body = body;

    var onUpdateNote = this.props.onUpdateNote;
    if (typeof onUpdateNote === 'function') {
      onUpdateNote(note);
    }
  }
}

export default Note;
