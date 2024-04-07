import "./style.scss";
import { Token, canisterId, createActor } from "../../../../declarations/Token";
import { useState } from "react";

const Button = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Top Up 10,000 GFD");

  const handleTopUpClick = async () => {
    setIsDisable((prev) => !prev);
    setButtonText("wait..");

    const result = await Token.payOut();
    setButtonText(result);
  };

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
