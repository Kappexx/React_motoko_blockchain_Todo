import "./style.scss";
import { Token } from "../../../../declarations/Token";
import { useEffect, useState, useCallback } from "react";

const Button = ({ currentBalance, balance }) => {
  const [isDisable, setIsDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Top Up 10,000 GFD");

  const handleTopUpClick = async () => {
    setIsDisable((prev) => !prev);
    setButtonText("wait..");
    const result = await Token.payOut();
    setButtonText(result);
  };

  async function fetchBalance() {
    currentBalance((await Token.showbalance()).toLocaleString() + " GFD");
  }

  useEffect(() => {
    fetchBalance();
  }, [isDisable]);
  return (
    <button
      onClick={() => handleTopUpClick()}
      className={"Top_Up"}
      disabled={isDisable}
    >
      {buttonText}
    </button>
  );
};

export default Button;
