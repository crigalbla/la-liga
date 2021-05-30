export default async function apiCall(method, url) {
    const response = await fetch(url, {
        method,
    });
    if (response.status === 204) return { editedUser: true };
    return response.json();
}
