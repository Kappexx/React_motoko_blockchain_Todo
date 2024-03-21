import Text "mo:base/Text";
import List "mo:base/List";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";





actor _SaveTodo{
  
  type Todo = {
    todo: Text;
    timestamp: Text;
    edited: Bool;
  };

  stable var todos: List.List<Todo> = List.nil<Todo>();
  var todosforEdit: List.List<Todo> = List.nil<Todo>();


  public func createTodo(contentFU: Text, timestamp: Text, edited: Bool) {

    let newTodo: Todo = {
      todo = contentFU;
      timestamp = timestamp;
      edited = false;
    };

    todos := List.push(newTodo, todos);

    Debug.print(debug_show(todos))

   
  };

  public query func readTodos(): async [Todo] {

    return List.toArray<Todo>(todos);
  };

  public func deleteTodo_editTodo(id: Nat, conditon: Text, todo: Todo ) {
    
    if (conditon == "delete"){
       var listHead = List.take(todos, id);
      var listEndMinus1 = List.drop(todos, id + 1);
      todos := List.append(listHead, listEndMinus1);

    }else if (conditon == "edit") {

      todosforEdit := List.push(todo, todosforEdit);
      var pre_item = List.take(todosforEdit,1);

     
     
       var listHead = List.take(todos, id);
       var listEndMinus1 = List.drop(todos, id + 1);

       todosforEdit := List.append(listHead, pre_item);
       todos := List.append(todosforEdit, listEndMinus1);
      
    };
    Debug.print(debug_show("t"))
    
  };
};
