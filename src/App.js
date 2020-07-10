import React from 'react';
import ArtistList from './posts/ArtistList'
import NavBar from './posts/NavBar'
import Graph from './posts/Graph'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <style>{'body { background-color: black; }'}</style>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={ArtistList}/>
          <Route path="/graph" component={Graph}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
