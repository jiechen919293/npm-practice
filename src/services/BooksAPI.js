const baseUrl = 'http://localhost:5001/books';


export const getAll = async() =>
    fetch(`${baseUrl}`)
    .then(response => response.json())
    .then(data => data.books)

export const search = async(query) =>
    await fetch(`${baseUrl}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    })
    .then(response => response.json())
    .then(data => data.books)


export const get = async(bookId) =>
    fetch(`${baseUrl}/${bookId}`)
    .then(response => response.json())
    .then(data => data.book)

export const getUpdate = async(book, shelf) =>
    fetch(`${baseUrl}/${book.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shelf }),
    })
    .then(response => response.json())