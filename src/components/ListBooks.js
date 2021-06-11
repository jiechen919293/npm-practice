import { Link } from 'react-router-dom'

const ListBooks=()=> {
    return ( <> 
        <div className="list-books">
            <div className="list-books-title"><h1>MITTReads</h1></div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=H8tNBKmPO5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}>

                                            </div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Fully Loaded</div>
                                        <div className="book-authors">Rob Huddleston</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=cEytznnRkikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}

                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android User Interface Design</div>
                                        <div className="book-authors">Ian G. Clifton</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Quick APIs Reference</div>
                                        <div className="book-authors">Onur Cinar</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=H8tNBKmPO5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Banting</div>
                                        <div className="book-authors">Michael Bliss</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=H8tNBKmPO5UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Comics</div>
                                        <div className="book-authors">Vincent Cecolini, John Nubbin</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want To Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android</div>
                                        <div className="book-authors">Paul J. Ward</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Design Patterns</div>
                                        <div className="book-authors">Greg Nudelman</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Ice Cream Sandwich Superguide (PCWorld Superguides)</div>
                                        <div className="book-authors"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Wearable Programming</div>
                                        <div className="book-authors">Steven F. Daniel</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Batman</div>
                                        <div className="book-authors">Frank Miller, Klaus Janson, Lynn Varley</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`
                                                }}
                                            ></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="move" disabled="">Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">Android Apps Security</div>
                                        <div className="book-authors">Sheran Gunasekera</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search"><Link to="/search">Add a book</Link></div>
        </div>
    </> )
    }
    export default ListBooks