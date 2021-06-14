import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Book from '../components/Book'
import * as BooksAPI from '../services/BooksAPI'


const SearchBooks = (props) => {
    const [query,setQuery]=useState('')
    const [searchList, setSearchList] = useState([])

//update query
    const  updateQuery = (e) => {
        setQuery (e.target.value.trim()) 
    }

//use submit to active search
    const handleKeyPress = (e) => {
    const key = e.key
        if (key === 'Enter') {
            searchQuery(query)
        }
    }

//search API and update
    const searchQuery=(queryStr)=>{
    if (queryStr.length > 0) {
        BooksAPI.searchBooks(queryStr).then(books => {
            console.log(books);
            if (books.length > 0) { 
                const listBooks =
                    books
                        .map((book) => ({
                            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                            authors: book.authors ? book.authors.join(', ') : '',
                            id: book.id,
                            // shelf: queryShelf(book.id) || 'none'
                        }))
                setSearchList( listBooks );
            } 
        })
    }  
    }
    const handleMoveBook = (e, bookId) => {
    console.log(e,e.target.value);
        const bookShelf = e.target.value
        BooksAPI
            .update(bookId, bookShelf)
            .then(() => {
                deleteBook(bookId)
                props.updateBooks()
            })
    }
    const  deleteBook= (deleteID) => {
        const oldList = searchList
        const listBooks = oldList.filter((book) => (
            book.id !== deleteID
        ))
        setSearchList(listBooks)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                    placeholder="Search by title or author" 
                    onChange={updateQuery}
                    value={query}
                    onKeyPress={handleKeyPress}
                     />
                </div>
            </div>
            <div className="search-books-results">
                <div className="results-quantity">Your search returned {searchList.length?searchList.length:'0'} results.</div>
                <ol className="books-grid">{
                 searchList.map((item,index)=>(
                     <Book key={index} currentBook={item} handleMove={handleMoveBook}/>
                 ))
                }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks