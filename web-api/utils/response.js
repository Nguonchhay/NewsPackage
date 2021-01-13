const success = (res, data) => {
    res.statusCode = 200
    const result = {
        statusCode: data.statusCode ? data.statusCode : res.statusCode,
        data
    }

    return res.json(result)
}

const failure = (res, statusCode, message) => {
    res.statusCode = 200
    const result = {
        statusCode,
        message
    }

    return res.json(result)
}

module.exports = {
    success,
    failure
}