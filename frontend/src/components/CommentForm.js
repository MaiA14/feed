import React, { Component } from 'react';
export default class CommentForm extends Component {

    state = {
        gravatar: 'https://he.gravatar.com/userimage/131942614/161c0e6bc0868e9a0253707495c1c546.jpeg',
        email: '',
        content: ''
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
            this.setState({ email: comment.email, content: comment.content })
        }
    }

    onSave = () => {
        this.props.onSave(this.state);
        this.setState({ email: '', content: '' });
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({ [fieldName]: fieldValue });
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <input pattern="/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required placeholder="Email" name="email"
                        onChange={this.inputChange} value={this.state.email}></input>
                    <input type="text" placeholder="Message" name="content"
                        onChange={this.inputChange} value={this.state.content}></input>
                <div className="form-buttons">
                    <button onClick={this.onSave} className="submit-button">Submit</button>
                </div>
                </form>
            </div>

        )
    }
}