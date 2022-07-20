const Message = require('./messageModel')

const postMessage = async (req, res, next) => {
    const message = req.body.message
    try {
        const newMessage = new Message({ message })
        const data = await newMessage.save()

        res.locals.data = data
        res.locals.status = 201
        next()
    } catch (err) {
        next(err)
    }
}

const getAllMessages = async (req, res, next) => {
    try {
        const data = await Message.find()

        res.locals.data = data
        res.locals.status = 201
        next()
    } catch (err) {
        next(err)
    }
}

const deleteMessage = async (req, res, next) => {
    const { messageId } = req.body

    try {
        const data = await Message.findOneAndDelete({ _id: messageId })

        res.locals.data = data
        res.locals.status = 201
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    postMessage,
    getAllMessages,
    deleteMessage
}