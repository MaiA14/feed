const commentService = require('./comment.service')
const logger = require('../../services/logger.service')

async function getComment(req, res) {
    const comment = await commentService.getById(req.params.id)
    res.send(comment)
}

async function getComments(req, res) {
    console.log(req.query);
    const comments = await commentService.query(req.query)
    res.send(comments)
}

async function deleteComment(req, res) {
    await commentService.remove(req.params.id)
    res.end()
}

async function updateComment(req, res) {
    const comment = req.body;
    const id = req.params.id
    const newComment = await commentService.update(id, comment)
    await res.send(newComment)
}

async function addComment(req, res) {
    var comment = req.body;
    var email = req.body.email
    console.log(req.body)
    comment = await commentService.add(comment)
    res.send(comment)
}

module.exports = {
    getComment,
    getComments,
    deleteComment,
    updateComment,
    addComment
}