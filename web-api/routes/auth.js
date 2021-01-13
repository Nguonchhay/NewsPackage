const express = require('express')
const Response = require('./../utils/response')
const authMiddleware = require('./../middlewares/auth')

const router = express.Router()

router.post('/', (req, res) => {
    return Response.success(res, {
        access_token: '1234567890'
    })
})

router.get('/me', authMiddleware, (req, res) => {
    return Response.success(res, {
        id: 1,
        email: 'test@test.com',
        name: 'Test user'
    })
})

module.exports = router