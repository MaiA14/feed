import React from 'react';

export default function CommentPreview(props) {
    return (
        <div className="comment-preview">
            <div className="comment-line flex">
                <div className="comment-gravatar-preview">
                    <img src={props.comment.gravatar} className="gavatar-icon"></img>
                </div>
                <div className="email-and-msg">
                    <div className="comment-email-preview">{props.comment.email}</div>
                    <div className="comment-content-preview">{props.comment.content}</div>
                </div>
            </div>
        </div>
    )
}