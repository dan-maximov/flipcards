import React, { useState, forwardRef } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Card from "components/Card";
import styles from "./home.module.css";

const Home = forwardRef(({ addCard, deleteCard, cards }, ref) => {
  const clearInputs = () => {
    setInput1("");
    setInput2("");
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

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
        <Button className={styles.button} type="submit">
          Add card
        </Button>
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
