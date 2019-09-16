import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MatchupDetail from './components/matchup/MatchupDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/matchup/:id' component={MatchupDetail}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
