const routers = app => {
    // Middleware that is specific to this router
    app.use((req, res, next) => {
        console.log('Time: ', Date.now())
        next()
    })

    app.use('/api/auth', require('./auth'))
}

module.exports = routers