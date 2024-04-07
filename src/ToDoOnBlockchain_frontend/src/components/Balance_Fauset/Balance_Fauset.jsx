import { useEffect, useState } from "react";
import "./style.scss";
import { Token } from "../../../../declarations/Token";
import Button from "../Button/Button";
import Auth from "../../Auth/auth";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const Balace_Fauset = () => {
  const [identitycheck, setIdentitycheck] = useState(false);
  const [principal, setprincipal] = useState("///////");

  const balanceState = useSelector((state) => state.balance);
  console.log(balanceState);

  // aq problema isaa ro refreshze state dzvel saxes ibrunebs da savaraudod redux gamoasworebs
  const handleGetIdentityClick = async () => {
    //             returned    authClient
    const registeredUser = await Auth();
    const identity = await registeredUser.getIdentity();
    console.log(identity._principal.toString());

    setprincipal(identity._principal.toString());

    setIdentitycheck((prev) => {
      if (registeredUser.isAuthenticated()) {
        return !prev;
      } else {
        prev;
      }
    });
  };

  return (
    <div className="Container">
      <div className="Current_balance_Container">
        <i className="Current_Balance">Your Current Balance: </i>
        <span className="balance" style={{ color: "yellow" }}>
          {balanceState.balance}
        </span>
      </div>
      <div className="Top_Up_Container">
        <i style={{ textAlign: "center" }}>
          Top Up Your Balance For Free Once but Befor you need your Identity
        </i>
        {!identitycheck ? (
          <button onClick={handleGetIdentityClick} className="get_identity">
            {" "}
            Get Identity
          </button>
        ) : (
          <Button />
        )}
      </div>
      <p>{principal}</p>
    </div>
  );
};

export default Balace_Fauset;
