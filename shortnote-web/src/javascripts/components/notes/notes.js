
import './notes.styl';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Note from '../note/note';

class notes extends React.Component {
  render() {
    const { notes } = this.props;

    var noteNodes = notes.map(function (note, index) {
      return <Note note={note} key={note.id}/>;
    });

    return (
      <div className="notes">
        {
          <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            { noteNodes }
          </ReactCSSTransitionGroup>
          // noteNodes
        }
      </div>
    );
  }
}

export default notes;
