import { useState } from "react";

export default function RandomGift() {
  const giftList = ["CPU i9", "RAM 32GB GRB", "RGB Keyboard"];

  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(Math.floor(Math.random() * 3));
  };
  return (
    <div>
      <h3>{giftList[index]}</h3>
      <button onClick={handleClick}>Random Gift</button>
    </div>
  );
}
