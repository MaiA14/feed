import React, { Component } from 'react';

export default class CommentForm extends Component {

    state = {
        email: '',
        msg: ''
    }

    componentDidMount() {
        this.setFormatDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.comment !== this.props.comment)
            this.setFormatDataForEdit();
    }

    setFormatDataForEdit() {
        const { comment } = this.props;
        if (comment) {
            this.setState({ email: comment.email, msg: comment.comment })
        }
    }

    onSave = () => {
        this.props.onSave(this.state.email).catch();
        this.setState({ email: '', msg: ''});
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({ [fieldName]: fieldValue });
    }

    render() {
        return (
            <div className="form-container">
                <input type="text" placeholder="email" name="email"
                    onChange={this.inputChange} value={this.state.email}></input>
                    
                <input type="text" placeholder="message"  name="msg"
                    onChange={this.inputChange} value={this.state.msg}></input>
                <div className="form-buttons">
                    <button onClick={this.onSave} className="submit-button">Submit</button>
                </div>
            </div>
        )
    }
}