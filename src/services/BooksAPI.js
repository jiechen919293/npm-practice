const baseUrl = 'http://localhost:5001/books';

export const getAll = async() => {
    const response = await fetch(baseUrl);
    return await response.json();
};
export const searchBooks = async(query) => {
    console.log(`${baseUrl}?title_like=${query}`);
    const response = await fetch(`${baseUrl}?title_like=${query}`);
    return await response.json();
};
export const get = async(id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    return await response.json();
};

export const update = async(id, bookshelf) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            shelf: bookshelf
        }),
    });
    return response;
};