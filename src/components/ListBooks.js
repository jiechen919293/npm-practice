import { Link } from 'react-router-dom'
import React from 'react'
const ListBooks=(props)=> {
    const {listBooks,movingBook}=props
    const shelfList = [
        {
            'show': 'Currently Reading',
            'id': 'currentlyReading'
        },
        {
            'show': 'Want to Read',
            'id': 'wantToRead'
        },
        {
            'show': 'Read',
            'id': 'read'
        }
    ]
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfList.map((shelf,index) => (
                        <BookShelf key={index} shelf={shelf} books={listBooks} onMoveBook={movingBook} />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
      )
    }
    export default ListBooks