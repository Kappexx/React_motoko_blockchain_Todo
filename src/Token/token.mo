import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";



// dasamtebelia balansis cheneba da gamosaklebia saerto raodenobaze

actor Token {

  let owner : Principal = Principal.fromText("wptol-bsown-srk4h-kvdzk-bsdlf-oyzo6-nnrgx-4u2py-yn7ot-mejl3-5ae");
  let totalSupply: Nat = 1000000000;
  let symbol : Text = "GFOOD";

  private stable var balanceEntries : [(Principal, Nat)] = [];

  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  if (balances.size() < 1) {
      balances.put(owner, totalSupply);
  };

  
 
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
   
    let result = await transfer(msg.caller, amount);
 
    return result
    } else {
  
      return "Already Claimed"
    }
    
  };

  // gasamartivebelia
  public shared(msg) func showbalance(): async Nat {
  
    let youserBalance  = await balanceOf(msg.caller);
  
    if (youserBalance > 0) {

      return youserBalance
    }else {

      return 0000
    };
  };
  // to -> visac vuricxavt. from -> iqneba msg.caller idan, anu am funqcias vinc gamoidzaxebs, da am kanistershi idzaxebs titon es kanisteri Payout punqciashi
  public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {
    let fromBalance = await balanceOf(msg.caller);
    let toBalance = await balanceOf(to);


    if(fromBalance > amount) {
      if(msg.caller == to){

        return "Sorry but you can't send your token same wallet as you sending from"
      };
      // gamovaklot gamgzavnis balanss
      balances.put(msg.caller, fromBalance - amount);
      // davumatot adresatis balanss visac vugzavnit
      balances.put(to, toBalance + amount);
      return "Success"
    } else {

      return "Insufficient funds"
    }
    
  };

  // before
  system func preupgrade() {
    // []    =  (I).toArray[balances.entries()-->(entries), (entries),(entries)....]
    // [(),(),()]
    balanceEntries := Iter.toArray(balances.entries());
    
  };
  // Logic
  // state fill from iter balanceEntries := Iter.toArray(balances.entries());

  // after

  // Logic
  // hashmap fiill with state
  
 
  
  system func postupgrade() {
    // convert to hashmap from array
    // (H).fromIter([(),(),()].vals() --> ((),(),() -- how many items bigining -- how check principal-- edd hashed principal)
    balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals() , 1, Principal.equal, Principal.hash);

    // add totalsuply just during first aupgrade
    if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
  };
  // Debug.print("resetistvis")
}