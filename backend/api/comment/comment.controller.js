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
    var email = req.body.email;
    var content = req.body.content;
    comment = await commentService.validateInputs(email,content);
    if (isEmailValid(email)){
    await commentService.add(comment)
    await res.send(comment)
    }
    else
        return;
}

function isEmailValid(email) {
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email)
        return false;
    if (email.length > 254)
        return false;
    var valid = emailRegex.test(email);
    if (!valid)
        return false;
    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if (parts[0].length > 64)
        return false;
    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part) { return part.length > 63; }))
        return false;
    return true;
}

module.exports = {
    getComment,
    getComments,
    deleteComment,
    updateComment,
    addComment
}