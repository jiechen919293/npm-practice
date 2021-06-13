import React from 'react'
import Book from '../components/Book';

const Bookshelf = (props) => {
    const {shelf,books,onMoveBook}=props

    return (
        <div className="bookshelf" >
            <h2 className="bookshelf-title">{shelf.show}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books[shelf.id].map((book, index) => (
                        <Book key={index} currentBook={book} onMoveBook={onMoveBook} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;