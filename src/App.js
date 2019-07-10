import React, {Fragment} from 'react';

import SearchBar from './containers/SearchBar'

import { Provider } from 'react-redux';
import store from './store';


import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment >
        <SearchBar />
      </Fragment>
    </Provider>
  );
}

export default App;
