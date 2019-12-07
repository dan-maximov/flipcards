import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Card from "components/Card";

const Home = ({ addCard, cards }) => {
  const clearInputs = () => {
    setInput1("");
    setInput2("");
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const enhancedAddCard = addCard(input1, input2, clearInputs);

  return (
    <>
      <form onSubmit={enhancedAddCard}>
        <div>
          <Input value={input1} onChange={e => setInput1(e.target.value)} />
          <Input value={input2} onChange={e => setInput2(e.target.value)} />
        </div>
        <Button type="submit">Add card</Button>
      </form>
      <div>
        {cards.map(data => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Home;
