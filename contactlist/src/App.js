import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import ContactList from './containers/ContactList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ContactList />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;