import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/Login/index'
import UserProfile from './pages/UserProfile/index'
import Signup from './pages/Signup'
import Logout from '.pages/Logout'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
