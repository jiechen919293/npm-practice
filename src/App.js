import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
// import * as BooksAPI from './services/BooksAPI'
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
        <Switch>
        <Route exact path='/'>
           <ListBooks /> 
        </Route>

        </Switch>
        <Switch>
        <Route path='/search'>
        <SearchBooks />   
        </Route>

        </Switch>
       
      </div>
  </Router>);
}

export default App;
