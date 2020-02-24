import React from 'react'
import CommentPreview from '../components/CommentPreview.js';

export default function CommentList(props) {
    return <div className="list">
        {props.comments.map((comment, i) =>
            <CommentPreview key={i} comment={comment} />)}
    </div>
}