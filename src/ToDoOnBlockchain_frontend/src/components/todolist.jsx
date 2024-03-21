import { useState } from "react";
import "./todolist.scss";

const TodoList = ({ todo, delltodo, timestamp, index, editTodo, edited }) => {
  const [edit, setEdit] = useState(false);

  const [currenEdittTodo, setCurrentEditTodo] = useState("");

  const handlecklick = (timestamp_Par) => {
    delltodo(timestamp_Par, index);
    setEdit(false);
  };

  const editcklick = (index) => {
    setEdit((prev) => !prev);
    setCurrentEditTodo(todo);
    if (edit) {
      editTodo(currenEdittTodo, index);
    }
  };
  const handleChange = (e) => {
    setCurrentEditTodo(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key == "Enter") {
      setEdit((prev) => !prev);
      setCurrentEditTodo(todo);
      if (edit) {
        editTodo(currenEdittTodo, index);
      }
    }
  };
  return (
    <div className="todolistUpperContainer">
      <div className="todoList_container">
        {!edit ? (
          <span>{todo}</span>
        ) : (
          <textarea
            className="textarea"
            wrap="soft"
            value={currenEdittTodo}
            onKeyDown={(e) => handleKey(e)}
            onChange={(e) => handleChange(e)}
          ></textarea>
        )}

        <span
          onClick={() => handlecklick(timestamp)}
          className="delete_absolute"
        >
          X
        </span>
      </div>
      <span className="edit_save" onClick={() => editcklick(index)}>
        {!edit ? "Edit" : "Save"}
      </span>
      <span className="timestamp_absolutee">
        {timestamp}{" "}
        {edited && (
          <span style={{ color: "yellow", fontWeight: "bold" }}> Edited </span>
        )}
      </span>
    </div>
  );
};

export default TodoList;
