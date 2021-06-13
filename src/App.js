import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './services/BooksAPI'
import './App.css';

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([])
  const [wantToRead, setWantToReading] = useState([])
  const[read,setRead]=useState([])


  BooksAPI
    .getAll()
    .then(books => {
      console.log(books);
      const list = {currentlyReading,wantToRead,read}
      books
        .forEach((book) => (
          list[book.shelf].push({
            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
            authors: book.authors ? book.authors.join(', ') : '',
            id: book.id,
            shelf: book.shelf
          })))})
        

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

export default App