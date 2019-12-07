import React, { useState } from "react";
import Home from "pages/home";
import Button from "components/Button";
import { STATUSES } from "./constants";
import Game from "pages/game";

const counterCreator = initialNumber => {
  let q = initialNumber;
  return () => q++;
};

const counter = counterCreator(0);

const App = () => {
  const [status, setStatus] = useState(STATUSES.home);
  const [cards, setCards] = useState([]);

  const addCard = (input1, input2, clearInputs) => e => {
    if (e) {
      e.preventDefault();
    }

    if (!input1 || !input2) {
      return;
    }

    setCards([
      ...cards,
      {
        id: counter(),
        side1: input1,
        side2: input2
      }
    ]);
    clearInputs();
  };

  const startGame = () => {
    setStatus(STATUSES.game);
  };

  if (status === STATUSES.home) {
    return (
      <>
        <Home addCard={addCard} cards={cards} />
        <Button onClick={startGame} disabled={cards.length === 0}>
          Start the game
        </Button>
      </>
    );
  }

  if (status === STATUSES.game) {
    return <Game cards={cards} setStatus={setStatus} />;
  }
};

export default App;
