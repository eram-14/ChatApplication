const express = require('express')
const { sendMessage, allMessages } = require('../controllers/messageContollers')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post(protect, sendMessage)
router.route('/:chatId').get(protect, allMessages)

module.exports = router