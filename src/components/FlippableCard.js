import React from "react";

const FlippableCard = ({ data, flipped, ...props }) => (
  <div {...props}>
    <p>{flipped ? data.side1 : data.side2}</p>
  </div>
);

export default FlippableCard;
