const apiMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const headers$ = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const parseHttpErrors = (err, status) => ({
    status: status || 500,
    results: err,
});

const handleApi = async (response) => {
    if (!response.ok) {
        return {
            status: response.status,
            url: response.url,
            err: response.statusText,
        };
    }

    let responseJson;
    try {
        responseJson = await response.json().then((json) => ({
            status: response.status,
            results: json,
        }));
    } catch {
        return response;
    }

    return responseJson;
};

const FetchService = async (method, path) => {
    if (!path) return parseHttpErrors('Error URL did not add');
    if (!apiMethods.includes(method.toUpperCase())) {
        return parseHttpErrors(`Error in method type: You used '${method}'. You must use GET, POST, PUT or DELETE`);
    }

    try {
        const parameters = {
            method: method.toUpperCase(),
            headers: headers$,
        };

        return fetch(process.env.REACT_APP_API + path, parameters)
            .then((response) => {
                if (response && response.status === 200) return handleApi(response);

                return parseHttpErrors(response, response.status);
            })
            .catch((error) => parseHttpErrors(error));
    } catch (error) {
        return parseHttpErrors(error);
    }
};

export default FetchService;
