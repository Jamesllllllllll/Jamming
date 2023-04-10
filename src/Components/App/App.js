import React from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [
        { name: "Ice V", artist: "King Gizzard and the Lizard Wizard", album: "Ice, Death, Planets, Lungs, Mushrooms and Lava", id: "1" },
        { name: "23", artist: "Blonde Redhead", album: "23", id: "2" },
        { name: "Acrit Avid Jam Shred", artist: "Aphex Twin", album: "...I Care Because You Do", id: "3" }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [{ name: "Acrit Avid Jam Shred", artist: "Aphex Twin", album: "...I Care Because You Do", id: "3" }],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {

      tracks.push(track);
      this.setState({ playlistTracks: tracks });

    }
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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
