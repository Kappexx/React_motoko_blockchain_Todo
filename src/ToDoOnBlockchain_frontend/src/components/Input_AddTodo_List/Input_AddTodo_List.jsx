import "./style.scss";

import { useState, useEffect, Fragment } from "react";
import { ToDoOnBlockchain_backend } from "../../../../declarations/ToDoOnBlockchain_backend";

import Button from "../Button/Button";
import TodoList from "../TodoList/Todo_List";

const Input_AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [typingTodo, setTypingTodo] = useState("");

  const smartfunc = (setState) => {
    setState((prevState) => [
      {
        todo: typingTodo,
        timestamp: new Date().toLocaleString(),
        edited: false,
      },
      ...prevState,
    ]);
    setTypingTodo("");
  };

  const handlekeydown = (e) => {
    if (e.key == "Enter") {
      smartfunc(setTodo);

      // motoko
      ToDoOnBlockchain_backend.createTodo(
        typingTodo,
        new Date().toLocaleString(),
        false
      );
    }
  };
  const handlepushtodoClick = () => {
    smartfunc(setTodo);

    // motoko
    ToDoOnBlockchain_backend.createTodo(
      typingTodo,
      new Date().toLocaleString(),
      false
    );
  };
  const deleteTodo = (timestamp_Par, index) => {
    ToDoOnBlockchain_backend.deleteTodo_editTodo(index, "delete", {
      todo: "",
      timestamp: "",
      edited: false,
    });
    const newTodoList = todo.filter((item, i) => i !== index);

    setTodo(newTodoList);
  };

  const edit = (editedtodo, index) => {
    // motoko
    ToDoOnBlockchain_backend.deleteTodo_editTodo(index, "edit", {
      todo: editedtodo,
      timestamp: new Date().toLocaleString(),
      edited: true,
    });

    // edit from react side
    let objIndex = todo.findIndex((obj, i) => i == index);
    let todoarraycopy = todo.slice();
    let editedTodoWithTime = {
      todo: editedtodo,
      timestamp: new Date().toLocaleString(),
      edited: true,
    };
    todoarraycopy[objIndex] = editedTodoWithTime;

    setTodo(todoarraycopy);
  };
  async function fetchDAta() {
    const responce = await ToDoOnBlockchain_backend.readTodos();
    setTodo(responce);
  }
  useEffect(() => {
    fetchDAta();
  }, []);

  return (
    <Fragment>
      <div className="input_button_Conrainer">
        <input
          onKeyDown={(e) =>
            (typingTodo.length !== 0 && handlekeydown(e)) || null
          }
          onChange={(e) => setTypingTodo(e.target.value)}
          placeholder={(typingTodo.length == 0 && "Enter todo") || ""}
          value={typingTodo}
        />
        <span
          className="add_todo"
          onClick={(typingTodo.length !== 0 && handlepushtodoClick) || null}
        >
          Add todo
        </span>
      </div>
      <div className="appearTodo_Conteiner">
        {todo.map((item, i) => {
          return (
            <TodoList
              key={i}
              todo={item.todo}
              index={i}
              delltodo={deleteTodo}
              timestamp={item.timestamp}
              editTodo={edit}
              edited={item.edited}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Input_AddTodo;
