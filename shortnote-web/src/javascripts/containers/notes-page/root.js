
import React from 'react';
import { createStore } from  'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/reducers';
import NotesPage from './notes-page';

let store = createStore(rootReducer);

class root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NotesPage />
      </Provider>
    );
  }
}

export default root;
