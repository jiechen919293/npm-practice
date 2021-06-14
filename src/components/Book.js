import BookShelfChanger from '../components/BookShelfChanger';
import React from 'react'

const Book = (props) => {
const {currentBook,handleMove}=props;

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${currentBook.cover})`
                        }}
                    ></div>
                    {<BookShelfChanger currentShelf={currentBook.shelf} bookId={currentBook.id} handleMove={handleMove}/> }
                </div>
                <div className="book-title">{currentBook.title}</div>
                <div className="book-authors">{currentBook.authors}</div>
            </div>
        </li>
    )
}
export default Book