const express = require('express')
const { getAllMessages, postMessage, deleteMessage } = require('./controller')

const router = new express.Router()

router.get('/messages', getAllMessages)

router.post('/post', postMessage)

router.delete('/delete', deleteMessage)

// router.delete('/post', deleteAllMessages)

router.use((req, res, next) => {
    return res.status(res.locals.status || 200).send({ status: "success", data: res.locals.data })
})

router.use((error, req, res, next) => {
    res.status(500).send({
        status: 500,
        message: error
    })
})

module.exports = router