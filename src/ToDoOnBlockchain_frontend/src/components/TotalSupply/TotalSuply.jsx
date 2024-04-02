import "./style.scss";

import { Principal } from "@dfinity/principal";
import { Token } from "../../../../declarations/Token";
import { useState, useEffect } from "react";

const TotalSuply = () => {
  const [totalSuply_symbol, setTootalSuply_symbol] = useState({
    totall: "1,000,000,000",
    symbol: "GFOOD",
  });

  // const fetchTotalSuply = async () => {
  //   const principal = Principal.fromText(
  //     "wptol-bsown-srk4h-kvdzk-bsdlf-oyzo6-nnrgx-4u2py-yn7ot-mejl3-5ae"
  //   );
  //   const Fetched_TotallSupplyAndSymbol = {
  //     ...totalSuply_symbol,
  //     totall: (await Token.balanceOf(principal)).toLocaleString(),
  //     symbol: await Token.getSymbol(),
  //   };

  //   setTootalSuply_symbol((prev) => ({
  //     ...prev,
  //     ...Fetched_TotallSupplyAndSymbol,
  //   }));
  // };

  // useEffect(() => {
  //   fetchTotalSuply();
  // }, []);
  return (
    <div className="TotalSuplyContainer">
      <i>Total Suply</i>
      <span className="token"> {totalSuply_symbol.totall}GFD </span>
      <span> "{totalSuply_symbol.symbol}" Token</span>
    </div>
  );
};

export default TotalSuply;
