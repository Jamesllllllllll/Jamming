import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Ice V", artist: "King Gizzard and the Lizard Wizard", album: "Ice, Death, Planets, Lungs, Mushrooms and Lava", id: "1" },
        { name: "23", artist: "Blonde Redhead", album: "23", id: "2" },
        { name: "Acrit Avid Jam Shred", artist: "Aphex Twin", album: "...I Care Because You Do", id: "3" }
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />{" "}
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
