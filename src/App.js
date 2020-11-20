import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Beers from './components/Beers.js'
import NewBeer from './components/NewBeer.js'
import RandomBeer from './components/RandomBeer.js'


function App() {
  return (
    <div className="App">
      <Link to="/beers">Beers</Link>
      <Link to="/new-beer">New Beer</Link>
      <Link to="/random-beer">Random Beer</Link>

      <Switch>
        <Route exact path="/" render={(props) => {
          return (
            <h1>Home Page</h1>
          )
        }} />
        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
