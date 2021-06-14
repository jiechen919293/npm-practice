import { Link } from 'react-router-dom'
import React from 'react'
import Book from '../components/Book'

const ListBooks=(props)=> {
    const {bookCur,bookWant,bookRead,handleMove}=props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf" id='currentlyReading' >
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookCur.map((book, index) => (
                                    <Book key={index} currentBook={book} handleMove={handleMove} />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf" id='Want to Read'>
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookWant.map((book, index) => (
                                    <Book key={index} currentBook={book} handleMove={handleMove} />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf" id='read'>
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookRead.map((book, index) => (
                                    <Book key={index} currentBook={book} handleMove={handleMove} />
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
      )
    }
    export default ListBooks