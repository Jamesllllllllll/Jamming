import React from "react";
import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  render() {
    const listItems = this.props.tracks.map(track => <li key={'track.id_'}>{track}</li>)
    return (
      <div className="TrackList">
        {/* (You will add a map method that renders a set of Track components) */}
        <ul><li>Track One</li><li>Track Two</li><li>Track Three</li>{/* {listItems} */}</ul>
      </div>
    );
  }
}
