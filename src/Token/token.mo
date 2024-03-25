import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";




actor Token {

  var owner : Principal = Principal.fromText("wptol-bsown-srk4h-kvdzk-bsdlf-oyzo6-nnrgx-4u2py-yn7ot-mejl3-5ae");
  var totalSupply: Nat = 1000000000;
  var symbol : Text = "GFOOD";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  public query func balanceOf(who: Principal): async Nat {
    let balance : Nat = switch (balances.get(who)) {
    case null 0;
    case (?result) result;
    };
    // Debug.print(debug_show(who));
    return balance;
  };

  public query func getSymbol(): async Text {

    return symbol;
  }
  

}