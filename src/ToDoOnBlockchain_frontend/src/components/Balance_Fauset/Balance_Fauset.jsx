import { useEffect, useState } from "react";
import "./style.scss";
import { Token } from "../../../../declarations/Token";
import Button from "../Button/Button";

const Balace_Fauset = () => {
  const [balance, setBalance] = useState("0000...");

  return (
    <div className="Container">
      <div className="Current_balance_Container">
        <i className="Current_Balance">Your Current Balance: </i>
        <span className="balance" style={{ color: "yellow" }}>
          {balance}
        </span>
      </div>
      <div className="Top_Up_Container">
        <span>Top Up Your Balance For Free Once</span>

        <Button currentBalance={setBalance} />
      </div>
    </div>
  );
};

export default Balace_Fauset;
