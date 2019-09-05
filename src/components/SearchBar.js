import React, { Component } from 'react'

export class SearchBar extends Component {
  
    state = {
        term: ''
    }

    handelOnChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui fluid action input">
                        <input type="text" value={this.state.term} onChange={this.handelOnChange} placeholder="Search..." />
                        <button className="ui icon button" onClick={this.handelOnChange}>
                            <i className="search icon"></i>
                        </button>
                    </div>
                </form>
            </>
        )
  }
}

export default SearchBar
