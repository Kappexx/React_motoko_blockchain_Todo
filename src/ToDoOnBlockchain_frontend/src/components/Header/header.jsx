import "./header.scss";

import TotalSuply from "../TotalSupply/TotalSuply";
import Balace_Fauset from "../Balance_Fauset/Balance_Fauset";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <h1 className="h1">
        Todo <span style={{ color: "white" }}>on</span> Blockchain
        <span style={{ color: "white" }}> 100%</span>
      </h1>
      <TotalSuply />
      <Balace_Fauset />
    </div>
  );
};

export default Header;
