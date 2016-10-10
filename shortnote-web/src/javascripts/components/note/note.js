
import './note.styl';
import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
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

  handleInputChange() {
    var body = this.refs.body.value;
    console.log(body);
  }
}

export default Note;
