import React, { Component } from 'react'

export default class CommentFilter extends Component {

    state = {
        filterBy: {
            email: '',
            content: ''
        }
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.props.onSetFilter({ [field]: value })
    }

    render() {
        return (
            <form id="search-comment">
                <input type="text" 
                    name="email" placeholder="Filter"
                    value={this.props.filterBy}
                    onChange={this.changeInput} />
            </form>
        )
    }
}