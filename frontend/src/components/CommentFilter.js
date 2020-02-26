import React, { Component } from 'react'

export default class CommentFilter extends Component {

    state = {
        filterBy: ''
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.props.onSetFilter(value)
        let filterBy = value;
        this.setState({ filterBy });
    }

    render() {
        return (
            <form id="search-comment">
                <input type="text"
                    name="filterBy" placeholder="Filter"
                    value={this.state.filterBy}
                    onChange={this.changeInput} />
            </form>
        )
    }
}