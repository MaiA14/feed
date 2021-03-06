import React, { Component } from 'react'

import commentService from '../services/CommentService.js';
import CommentForm from '../components/CommentForm.js';
import CommentList from '../components/CommentList.js';
import CommentFilter from '../components/CommentFilter.js';

export default class Feed extends Component {

    state = {
        comments: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        let filterBy = this.state.filterBy;
        commentService.query(filterBy).then((comments) => {
            this.setState({ comments });
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadComments)
    }

    validateEmail(email) {
        var re1 = (/^[a-z]((?!\.\.)([a-z\.])){,28}[a-z0-9]@gmail.com$/i).test(String(email).toLowerCase());
        var re2 = (/^[a-z]((?!\.\.)([\w\.])){3,30}[\w]@yahoo.com$/i).test(String(email).toLowerCase());
        var re3 = (/[a-z]((?!\.\.)([\w\.])){0,62}[\w]@(outlook.com|hotmail.com)$/i).test(String(email).toLowerCase());
        var re4 = (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(String(email).toLowerCase());
        return (re1 || re2 || re3 || re4)
    }

    isMailInLowerCase(str) {
        return str === str.toUpperCase();
    }

    onSave = (comment) => {
        if (comment.email === '' || comment.content === '') {
            alert('Please enter mail and content')
            return;
        }
        else {
            let mailValid = (this.validateEmail(comment.email) ||
                this.isMailInLowerCase(comment.email));
            if (!mailValid) {
                alert('Please enter valid email');
                return;
            }
            else {
                commentService.saveComment(comment)
                let commentsUpdated = this.state.comments
                commentsUpdated.unshift(comment)
                this.setState({ comments: commentsUpdated })
            }
        }
    }

    render() {
        return (
            <div>
                <h1 className="app-title">Feed</h1>
                <p className="app-description">Share your thoughts with the world!</p>
                <div className="comments-container">
                    <div className="comment-form">
                        <CommentForm onSave={this.onSave}></CommentForm>
                    </div>
                    <div className="filter-container">
                        <CommentFilter filterBy={this.state.filterBy}
                            onSetFilter={this.onSetFilter}></CommentFilter>
                    </div>
                    <CommentList comments={this.state.comments} />
                </div>
            </div>
        )
    }
}
