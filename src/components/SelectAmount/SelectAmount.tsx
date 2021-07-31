import { useState } from "react";
import "./SelectAmount.css";

const SelectAmount = () => {
  const [amount, setAmount] = useState(0);

  const handleClickAdd = () => setAmount(amount + 1);
  const handleClickSustract = () => setAmount(amount - 1);
  return (
    <div className="amount_box">
      <button onClick={handleClickSustract} className="amount_button">
        -
      </button>
      <p className="amount">{amount}</p>
      <button onClick={handleClickAdd} className="amount_button plus">
        +
      </button>
    </div>
  );
};

export default SelectAmount;
