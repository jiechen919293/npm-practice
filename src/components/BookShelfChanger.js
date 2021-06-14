import React from 'react'

const BookShelfChanger = (props) => {
    const {currentShelf,bookId,handleMove} = props
    // console.log(props);
    return (
        <div className='book-shelf-changer'>
            <select value={currentShelf ? currentShelf : 'none'} onChange={e =>handleMove(e, bookId)} >
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