import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

import './css/App.css';

function App() {
  return (
    <Router>
    <div className="app">
        <Header />
        
      <div className="app__body">
          <Sidebar />
          
          <Switch>
          
          </Switch>
          
      </div>
    </div>
    </Router>
  );
}

export default App;
