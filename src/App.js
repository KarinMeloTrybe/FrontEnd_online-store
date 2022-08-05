import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
