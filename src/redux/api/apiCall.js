const headers$ = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export default async function apiCall(method, url, data) {
    let parameters = { method: method.toUpperCase() };

    if (data) {
        parameters = {
            ...parameters,
            headers: headers$,
            body: JSON.stringify(data),
        };
    }

    const response = await fetch(url, parameters);

    if (response.status === 204) return { deletedUser: true };
    return response.json();
}
