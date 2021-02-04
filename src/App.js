import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/search' component={Search} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
