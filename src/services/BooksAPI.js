const baseUrl = 'http://localhost:5001/books';

export const getAll = async() => {
    const response = await fetch(baseUrl);
    return await response.json();
};

export const addRepair = async(repair) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(repair),
    });
    return response;
};

export const toggleCompleted = async(repair) => {
    repair.completed = !repair.completed;
    const response = await fetch(`${baseUrl}/${repair.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(repair),
    });
    return response;
};

export const deleteRepair = async(id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });
    return response;
};