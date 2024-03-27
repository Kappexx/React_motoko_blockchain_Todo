import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";


// dasamtebelia balansis cheneba da gamosaklebia saerto raodenobaze

actor Token {

  var owner : Principal = Principal.fromText("wptol-bsown-srk4h-kvdzk-bsdlf-oyzo6-nnrgx-4u2py-yn7ot-mejl3-5ae");
  var totalSupply: Nat = 1000000000;
  var symbol : Text = "GFOOD";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  // here can check all available balance with principal
  public query func balanceOf(who: Principal): async Nat {
    let balance : Nat = switch (balances.get(who)) {
    case null 0;
    case (?result) result;
    };
    
    return balance;
  };

  public query func getSymbol(): async Text {
    
    return symbol;
  };
  
  public  shared(msg) func payOut(): async Text {
    if (balances.get(msg.caller) == null){
    let amount = 10000;
    balances.put(msg.caller, amount);

    return "Success"
    } else {

      return "Already Claimed"
    }
    
  };

  public shared(msg) func showbalance(): async Nat {

    let youserBalance  = await balanceOf(msg.caller);

    if (youserBalance > 0) {

      return youserBalance
    }else {

      return 0000
    };

  };
  Debug.print("resetistvis")
}