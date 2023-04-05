import React from "react";

export class Track extends React.Component {
  renderAction() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>(track name will go here)</h3>
          <p>(track artist will go here) | (track album will go here)</p>
        </div>
        <button class="Track-action">{isRemoval ? "-" : "+"}</button>
      </div>
    );
  }
}
