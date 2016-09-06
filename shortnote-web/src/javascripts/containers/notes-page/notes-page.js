
import './notes-page.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import httpUtil from '../../utils/httpUtil';
import { addNote, deleteNote, receiveNotes, setLoading, hintMsg } from '../../actions';
import Notes from '../../components/notes/notes'
import Sidebar from '../../components/sidebar/sidebar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchNotes();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { dispatch, loading, notes } = this.props;
    return (
      <div className="notes-page">
        <Sidebar onAddNote={ e => this.onAddNote() }></Sidebar>
        <Notes notes={ notes } />
      </div>
    );
  }

  onAddNote() {
    this.props.dispatch(addNote());
  }

  onDeleteNote() {
    this.props.dispatch(deleteNote())
  }

  fetchNotes() {
    const { dispatch } = this.props;

    dispatch(setLoading(true));

    var successCallback = function (notes) {
      dispatch(setLoading(false));
      dispatch(receiveNotes(notes.items));

      setTimeout(this.updateNotes.bind(this), 5000);
    }.bind(this);

    var failCallback = function (err) {
      dispatch(setLoading(false));
      dispatch(hintMsg(err));
    }.bind(this);

    httpUtil.fetchNotes(successCallback, failCallback);
  }

  updateNotes() {
    const notes = this.props.notes;

    var successCallback = function () {
      setTimeout(this.updateNotes.bind(this), 5000);
    }.bind(this);

    var failCallback = function () {
      setTimeout(this.updateNotes.bind(this), 5000);
    }.bind(this);

    httpUtil.updateNotes(notes, successCallback, failCallback);
  }
};

App.propTypes = {
  loading: PropTypes.bool,
  notes: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.string,
    // user: PropTypes.string,
    createdTime: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string
  }))
}

// Which props do we want to inject, given the global state
function mapStateToProps(state) {
  const { loading, notes } = state;
  return {
    loading,
    notes
  }
}

// 如果定义mapStateToProps参数，组件将会监听 Redux store 的变化。任何时候，只要
// Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函
// 数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了
// 这个参数，你的组件将不会监听 Redux store。如果指定了该回调函数中的
// 第二个参数 ownProps，则该参数的值为传递到组件的 props，而且只要
// 组件接收到新的 props，mapStateToProps 也会被调用
export default connect(mapStateToProps)(App);
