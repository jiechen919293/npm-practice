import React from 'react'

const BookShelfChanger=(props)=> {
    
    const { bookID, curShelf } = props
    return (
        <div className='book-shelf-changer'>
            <select value={curShelf ? curShelf : 'none'} onChange={e => props.onMoveBook(e, bookID)} curShelf={currentBook.shelf}>
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