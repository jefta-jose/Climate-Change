export const paginate = (data, req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const startIndex = (page - 1) * limit; // 0, 10, 20, 30
    const endIndex = page * limit; // 10, 20, 30, 40
    const results = {};

    if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    results.results = data.slice(startIndex, endIndex);
    res.status(200).json(results);
}
export const orderData = (data, order) => {
    if (order === 'asc') {
        return data.sort((a, b) => a.id - b.id);
    } else if (order === 'desc') {
        return data.sort((a, b) => b.id - a.id);
    }
}
export const checkIfValuesIsEmptyNullUndefined = (req, res, obj) => {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
            return false;
        }
    }
    return true;
}