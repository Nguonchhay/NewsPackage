const Response = require('./../utils/response')

const auth = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization !== 'Bearer 1234567890') {
        return Response.failure(res, 401, 'Unauthorized!')
    }
    next()
}

module.exports = auth