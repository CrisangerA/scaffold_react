import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Screens
import Home from './screens/Home';

export default function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </div>
  )
}
