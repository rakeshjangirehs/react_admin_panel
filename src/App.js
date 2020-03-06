import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';

import HomePage from './pages/home-page/home-page';
import LoginPage from './pages/login-page/login-page';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>        
        </Switch>
      </Router>
  );
}

export default App;