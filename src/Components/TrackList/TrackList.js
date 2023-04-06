import React from "react";

export class TrackList extends React.Component() {
  render() {
    const listItems = this.props.tracks.map(string => <li key={'track.id_'}>{string}</li>)
    return (
      <div className="TrackList">
        {/* (You will add a map method that renders a set of Track components) */}
        <ul>{listItems}</ul>
      </div>
    );
  }
}
