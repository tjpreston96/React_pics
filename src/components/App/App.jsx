import React from "react";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
  state = {};

  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
