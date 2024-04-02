import "./style.scss";
import { Principal } from "@dfinity/principal";
import { Token } from "../../../../declarations/Token";
import { useState } from "react";
const Transfer = () => {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [disable, setdisable] = useState(false);

  const handleTransferCklick = async () => {
    try {
      setStatus("Progress..");
      setdisable((prev) => !prev);
      const respStatus = await Token.transfer(
        Principal.fromText(recipientId),
        Number(amount)
      );
      setStatus(respStatus);
      setAmount("");
      setdisable((prev) => !prev);
    } catch (error) {
      console.log(error);
      setStatus("Invalid address of principal");
      setdisable((prev) => !prev);
    }
  };
  return (
    <div className="container">
      <div className="transfer_inputs_container">
        <fieldset>
          <legend style={{ color: "white" }}>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                placeholder="Principal"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend style={{ color: "white" }}>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
      </div>
      <div className="transfer_cont">
        <div style={{ height: 50 }}>
          {!disable && (
            <p className="p_button" onClick={handleTransferCklick}>
              {"Transfer"}
            </p>
          )}
        </div>

        <p className="status">{status}</p>
      </div>
    </div>
  );
};

export default Transfer;
