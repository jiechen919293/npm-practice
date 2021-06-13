import BookShelfChanger from '../components/BookShelfChanger';
import React from 'react'

const Book = (props) => {
    const { id, title, authors, imageLinks } = props
    console.log(imageLinks);

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLinks})`
                        }}
                    ></div>
                    <BookShelfChanger bookId={id} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}
export default Book