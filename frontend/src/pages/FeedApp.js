import React, { Component } from 'react'

import commentService from '../services/CommentService.js';
import CommentForm from '../components/CommentForm.js';
import CommentList from '../components/CommentList.js';
import CommentFilter from '../components/CommentFilter.js';

export default class Feed extends Component {

    state = {
        comments: [],
        filterBy: {
            email: ''
        },
    }

    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        commentService.query(this.state.filterBy).then((comments) => {
            this.setState({ comments });
        })
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState => ({
            filterBy:
                { ...prevState.filterBy, ...filterBy }
        }), this.loadComments);
    }

    render() {
        return (
            <div>
                <div className="comments-container">
                <div className="comment-form">
                    <CommentForm></CommentForm>
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
