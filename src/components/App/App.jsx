import React from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component {
  state = {};

  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID utTmlDcVxmP8XnooUUPBk4VuFE_qzApfsVu8LvyFRX8",
      },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });

    console.log(response.data.results);
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
