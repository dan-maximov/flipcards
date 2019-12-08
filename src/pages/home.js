import React, { useState, forwardRef } from "react";
import cn from "classnames";
import Input from "components/Input";
import Button from "components/Button";
import Card from "components/Card";
import styles from "./home.module.css";

const Home = forwardRef(({ addCard, deleteCard, reverseCards, cards }, ref) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const clearInputs = () => {
    setInput1("");
    setInput2("");
  };

  const enhancedAddCard = addCard(input1, input2, clearInputs);

  return (
    <>
      <span>add a card!</span>
      <form className={styles.form} onSubmit={enhancedAddCard}>
        <Input
          ref={ref}
          placeholder="First sentence"
          value={input1}
          onChange={e => setInput1(e.target.value)}
        />
        <Input
          className={styles.input}
          placeholder="Second sentence"
          value={input2}
          onChange={e => setInput2(e.target.value)}
        />
        <div className={styles.formButtons}>
          <Button
            className={styles.button}
            type="submit"
            disabled={input1.length === 0 || input2.length === 0}
          >
            Add card
          </Button>
          <Button
            onClick={reverseCards}
            disabled={cards.length === 0}
            className={cn(styles.button, styles.reverseButton)}
          >
            Reverse cards
          </Button>
        </div>
      </form>
      <div className={styles.cardList}>
        {cards.map(data => (
          <Card
            del={deleteCard(data.id)}
            className={styles.card}
            key={data.id}
            data={data}
          />
        ))}
      </div>
    </>
  );
});

export default Home;
