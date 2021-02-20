import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit(evt) {
    evt.preventDefault();
    // console.log(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="What are you looking for?"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
