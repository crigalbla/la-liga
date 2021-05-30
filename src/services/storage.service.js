const StorageService = {
    save: (key, value) => window.localStorage.setItem(key, value),
    get: (key) => window.localStorage.getItem(key),
    delete: (key) => window.localStorage.removeItem(key),
    clear: () => window.localStorage.clear(),
};

export default StorageService;
