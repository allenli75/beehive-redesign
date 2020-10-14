import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Landing } from './pages/Landing.js';
import { Browse } from "./pages/Browse.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <Switch>
        <Route exact path="/browse" component={Browse}/>
      </Switch>
    </Router>
  );
};

export default App;
