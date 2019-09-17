import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import MatchupDetail from './components/matchup/MatchupDetail';
import SignIn from './components/authentification/SignIn';
import SignUp from './components/authentification/SignUp';
import CreateMatchup from './components/matchup/CreateMatchup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/matchup/:id' component={MatchupDetail}></Route>
        <Route path='/signin' component={SignIn}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/newmatchup' component={CreateMatchup}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
