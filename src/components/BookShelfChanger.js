import React from 'react'

const BookShelfChanger=(props)=> {
    
    const { bookID, curShelf } = props
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
        <div className='book-shelf-changer'>
        <select>
            {/* <select value={curShelf ? curShelf : 'none'} onChange={e => props.onMoveBook(e, bookID)} curShelf={currentBook.shelf}> */}
                <optgroup label='Move to...'>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </optgroup>
            </select>
        </div>
    )
}

export default BookShelfChanger