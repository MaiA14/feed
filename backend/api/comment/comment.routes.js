const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getComment, getComments, deleteComment, updateComment, addComment } = require('./comment.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getComments)
router.get('/:id', getComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)
router.post('/', addComment)

module.exports = router