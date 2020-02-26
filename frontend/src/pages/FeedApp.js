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
        this.setState({filterBy},this.loadComments)
    }

    onSave = (comment) => {
        commentService.saveComment(comment)
        let commentsUpdated = this.state.comments
        commentsUpdated.push(comment)
        this.setState({ comments: commentsUpdated })
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
