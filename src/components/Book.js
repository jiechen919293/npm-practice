import BookShelfChanger from '../components/BookShelfChanger';
import React from 'react'

const Book = (props) => {
    const { id, title, authors, imageLinks } = props
    let imageLink = "http://books.google.com/books/content?id=V-gtAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    const booktest = [{
        "title": "Best Android Apps",
        "authors": [
            "Mike Hendrickson",
            "Brian Sawyer"
        ],
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "xlp6NE2NWecC",
        "shelf": "currentlyReading"
    },
    {
        "title": "Android Design Patterns",
        "subtitle": "Interaction Design Solutions for Developers",
        "authors": [
            "Greg Nudelman"
        ],
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "Ifg1ZpSo7cwC",
        "shelf": "currentlyReading"
    },
    {
        "title": "Android Apps Security",
        "authors": [
            "Sheran Gunasekera"
        ],

        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "id": "IEk2m00o9_IC",
        "shelf": "currentlyReading"
    }

    ]
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageLink})`
                        }}
                    ></div>
                    {<BookShelfChanger/*  bookId={id} *//> }
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}
export default Book