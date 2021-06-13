import { Link } from 'react-router-dom'
import React, { useState, UseEffect } from 'react'
import Book from '../components/Book'
import * as BooksAPI from '../services/BooksAPI'


const SearchBooks = () => {
    const result = 10;
    const [query,setQuery]=useState('')
    const [searchList,setSearchList]=useState('')
    const booktest = [{
        "title": "Best Android Apps",
        "subtitle": "The Guide for Discriminating Downloaders",
        "authors": [
            "Mike Hendrickson",
            "Brian Sawyer"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2010-04-27",
        "description": "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9781449382551"
            },
            {
                "type": "ISBN_10",
                "identifier": "144938255X"
            }
        ],
        "readingModes": {
            "text": false,
            "image": false
        },
        "pageCount": 240,
        "printType": "BOOK",
        "categories": [
            "Computers"
        ],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
        "id": "bUybAgAAQBAJ"
    }, {
            "title": "Best Android Apps",
            "subtitle": "The Guide for Discriminating Downloaders",
            "authors": [
                "Mike Hendrickson",
                "Brian Sawyer"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2010-04-27",
            "description": "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781449382551"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "144938255X"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Computers"
            ],
            "averageRating": 4,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
            "id": "bUybAgAAQBAJ"
        }, {
            "title": "Best Android Apps",
            "subtitle": "The Guide for Discriminating Downloaders",
            "authors": [
                "Mike Hendrickson",
                "Brian Sawyer"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2010-04-27",
            "description": "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781449382551"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "144938255X"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Computers"
            ],
            "averageRating": 4,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
            "id": "bUybAgAAQBAJ"
        }, {
            "title": "Best Android Apps",
            "subtitle": "The Guide for Discriminating Downloaders",
            "authors": [
                "Mike Hendrickson",
                "Brian Sawyer"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2010-04-27",
            "description": "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781449382551"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "144938255X"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Computers"
            ],
            "averageRating": 4,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
            "id": "bUybAgAAQBAJ"
        }, {
            "title": "Best Android Apps",
            "subtitle": "The Guide for Discriminating Downloaders",
            "authors": [
                "Mike Hendrickson",
                "Brian Sawyer"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2010-04-27",
            "description": "Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781449382551"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "144938255X"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Computers"
            ],
            "averageRating": 4,
            "ratingsCount": 3,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
            "id": "bUybAgAAQBAJ"
        }];
  const  updateQuery = (e) => {
        setQuery (e.target.value.trim()) 
    }
   const handleKeyPress = (e) => {
        const key = e.key
        if (key === 'Enter') {
            searchBooks(e.target.value)
        }
    }
const searchBooks=(query)=>{
    console.log(query);
    if (query.length > 0) {
        BooksAPI.search(query, result).then(books => {
            console.log(books);
            // if (books.length > 0) { 
            //     const listBooks =
            //         books
            //             .map((book) => ({
            //                 cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
            //                 title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
            //                 authors: book.authors ? book.authors.join(', ') : '',
            //                 id: book.id,
            //                 shelf: queryShelf(book.id) || 'none'
            //             }))
            //     setSearchList({ listBooks });
            // } 
        })
    }
        
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
                <div className="results-quantity">Your search returned {booktest.length} results.</div>
                <ol className="books-grid">{
                 booktest.map((item,index)=>(
                     <Book key={index} currentBook={item} />
                 ))
                }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks