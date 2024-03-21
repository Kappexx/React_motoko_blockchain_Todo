import { Fragment, useState, useEffect } from "react";

import "./app.scss";
import TodoList from "./components/todolist";

import { ToDoOnBlockchain_backend } from "../../declarations/ToDoOnBlockchain_backend";

function App() {
  const [typingTodo, setTypingTodo] = useState("");
  const [todo, setTodo] = useState([
    // {
    //   todo: "your first todo appear here",
    //   timestamp: new Date().toLocaleString(),
    // },
  ]);

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

  // edit from react side
  const edit = (editedtodo, index) => {
    ToDoOnBlockchain_backend.deleteTodo_editTodo(index, "edit", {
      todo: editedtodo,
      timestamp: new Date().toLocaleString(),
      edited: true,
    });
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

  useEffect(() => {
    fetchDAta();
  }, []);

  async function fetchDAta() {
    const responce = await ToDoOnBlockchain_backend.readTodos();
    setTodo(responce);
  }

  // not working on blockchain
  // fetch

  // useEffect(() => {
  //   const response = async () => {
  //     const resp = await fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
  //       headers: {
  //         "X-Api-Key": "Bz6md3708/FHg3VaRydzig==SOZUC9ZXdOahd2TG",
  //       },
  //     });
  //     console.log(await resp.json());
  //   };
  //   response();
  // }, []);
  return (
    <Fragment>
      <div className="main_container">
        <h1>
          Todo <span style={{ color: "white" }}>on</span> Blockchain
          <span style={{ color: "white" }}> 100%</span>
        </h1>
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
      </div>

      <div className="appearTodo_Conteiner">
        {/* <div className="latest_absolute">
          {todo.length > 0 && (
            <>
              <div className="todoList_container_latest">
                <p className="latest">Latest Added</p>
                <span>{todo.slice(0)[0].todo}</span>

                <span
                  onClick={() => deleteTodo(todo.slice(0)[0].timestamp)}
                  className="delete_absolute"
                >
                  X
                </span>
              </div>
              <p className="timestamp_absoluteP">
                {todo.slice(0)[0].timestamp}
              </p>
            </>
          )}
        </div> */}

        {todo.map((item, i) => {
          return (
            <TodoList
              key={i}
              todo={item.todo}
              index={i}
              delltodo={deleteTodo}
              timestamp={item.timestamp}
              editedtodofunc={setTypingTodo}
              editTodo={edit}
              edited={item.edited}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
