const express = require('express')
const cors = require('cors')
// const path = require('path')
const router = require('./router')

const port = process.env.PORT || 4000
require('./mongoose')

// const publicDirectoryPath = path.join(__dirname, '..', 'public')

const app = express()
app.use(cors())
// app.use(express.static(publicDirectoryPath))
app.use(express.json())

// app.use((req, res, next) => {
//     return res.send(publicDirectoryPath + '/index.html')
// })

app.use(router)

router.use((req, res, next) => {
    return res.status(res.locals.status || 200).send({ status: "success", data: res.locals.data })
})

router.use((error, req, res, next) => {
    res.status(500).send({
        status: 500,
        message: error.message
    })
})

// app.all("*", (req, res) => {
//     res.status(400).render('error-page')
// })

app.listen(port, () => {
    console.log('Server connected, port:', port)
})