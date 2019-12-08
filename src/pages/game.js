import React, { useState } from "react";
import FlippableCard from "components/FlippableCard";
import { STATUSES } from "../constants";

const Game = ({ cards, setStatus }) => {
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const increasePosition = () => setPosition(position + 1);

  const goNextCard = () => {
    if (position === cards.length - 1) {
      setStatus(STATUSES.home);

      return;
    }

    setFlipped(false);
    increasePosition();
  };

  const flipTheCard = () => {
    console.log("a");
    setFlipped(true);

    setTimeout(goNextCard, 2000);
  };

  return (
    <FlippableCard
      onClick={flipped ? undefined : flipTheCard}
      data={cards[position]}
      flipped={flipped}
    />
  );
};

export default Game;
