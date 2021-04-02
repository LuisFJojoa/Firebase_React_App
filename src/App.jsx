import React from 'react';
import { 
    HashRouter as Router, 
    Redirect, 
    Route, 
    Switch
  } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import Menu from './components/Menu'
import Product from './components/Product';

function App() {
  return (
    <div className="Container" >
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path='/home' component={HomePage}></Route>
          <Route  path='/product' component={Product}></Route>
          <Route  path='/login' component={LoginPage}></Route>
          <Redirect from='/' to='/login'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
