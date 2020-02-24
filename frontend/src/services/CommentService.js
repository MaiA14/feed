import axios from 'axios';
import HttpService from './HttpService.js'

var Axios = axios.create({
    withCredentials: true
});

export default {
    query,
    getCommentById,
    saveComment,
    deleteComment,
}

function query() {
    return HttpService.get(`comment`)
}

function getCommentById(commentId) {
    return HttpService.get(`comment/${commentId}`)
}

function saveComment(comment) {
    if (comment._id)
        return HttpService.put(`comment/${comment._id}`, comment)
    return HttpService.post(`comment,${comment}`)
}

function deleteComment(commentId) {
    return HttpService.delete(`comment${commentId}`).then(res => res.data);
}