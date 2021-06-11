import { Link } from 'react-router-dom'

const SearchBooks=()=> {
    return (
    <>
 <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value="drama"  />
            </div>
          </div>
          <div className="search-books-results">
            <div className="results-quantity">Your search returned 10 results.</div>
            <ol className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                     style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url('http://books.google.com/books/content?id=1w4fAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">Raina Telgemeier</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=1aL-MQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">Raina Telgemeier</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')`
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">Raina Telgemeier</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=swrzAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">John C. Coldewey, W. R. Streitberger</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=2tGVK4byP-QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
                      
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">Charlyn Wessels</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=hwn1e3o8xK8C&printsec=frontcover&img=1&zoom=1&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">R. S. Gwynn</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=61kxP95ifPIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">J. L. Styan</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=vsIh1UAVpcEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
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
                  <div className="book-title">Drama as Therapy</div>
                  <div className="book-authors">Phil Jones</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=XiPqzmyWzjMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
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
                  <div className="book-title">Drama with Children</div>
                  <div className="book-authors">Sarah Phillips</div>
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
                        backgroundImage:`url('http://books.google.com/books/content?id=JRvRv_JGNWcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')`}}
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
                  <div className="book-title">Drama</div>
                  <div className="book-authors">W. B. Worthen</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
    </>)
}
export default SearchBooks