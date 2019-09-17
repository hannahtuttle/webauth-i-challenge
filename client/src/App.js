import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Register from './components/register.js'
import Login from './components/login.js'
import Users from './components/users.js'

function App() {
  return (
    <Router>
    <div className="App">
    {/* <Register /> */}
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={Login} />
    <Route exact path='/users' component={Users} />
    </div>
    </Router>
  );
}

export default App;
