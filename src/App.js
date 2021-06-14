import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './services/BooksAPI'
import './App.css';

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([])
  const [wantToRead, setWantToRead] = useState([])
  const [read, setRead] = useState([])


//hanle move book
  const handleMove = (e, id) => {
    // console.log(e.target, id, e.target.value)
    const bookShelf = e.target.value
    BooksAPI.update(id, bookShelf)
      .then(() => {
        updateBooks()
      })
  }

//useEffect
  useEffect(() => { updateBooks() }, [])

//update API data
  const updateBooks = () => {
    BooksAPI.getAll().then(books => {
      const newBooks =
        books
          .map((book) => ({
            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
            authors: book.authors ? book.authors.join(', ') : '',
            id: book.id,
            shelf: book.shelf
          }))

      const book1 = newBooks.filter(book => { return book.shelf === 'currentlyReading' })
      setCurrentlyReading(book1)
      const book2 = newBooks.filter(book => { return book.shelf === 'wantToRead' })
      setWantToRead(book2)
      const book3 = newBooks.filter(book => { return book.shelf === 'read' })
      setRead(book3)
    })
  }

//return and use Router
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path='/'>
            <ListBooks bookCur={currentlyReading} bookWant={wantToRead} bookRead={read} handleMove={handleMove} />
          </Route>
        </Switch>

        <Switch>
          <Route path='/search'>
            <SearchBooks handleMove={handleMove} updateBooks={updateBooks} />
          </Route>
        </Switch>

      </div>
    </Router>);
}

export default App