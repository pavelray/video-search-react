import React, { Component } from 'react'

export class SearchBar extends Component {
  
    state = {
        term: ''
    }

    handelOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) =>{
        console.log(this.state.term);
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui fluid action input">
                        <input type="text" value={this.state.term} onChange={this.handelOnChange} placeholder="Search..." />
                        <button className="ui icon button">
                            <i className="search icon"></i>
                        </button>
                    </div>
                </form>
            </>
        )
  }
}

export default SearchBar
