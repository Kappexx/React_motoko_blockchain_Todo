import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";

actor Test {

  let array = [10, 11, 12];

  var sum = 0;
  for (element in array.vals()) {
  sum += element;
  // Debug.print(debug_show(sum: Nat));
  };
 
  
  
};