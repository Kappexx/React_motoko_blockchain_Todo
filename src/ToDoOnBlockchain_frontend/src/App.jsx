import "./app.scss";

import Header from "./components/Header/header";
import Input_AddTodo_List from "./components/Input_AddTodo_List/Input_AddTodo_List";
import Transfer from "./components/Transfer/Transfer";

function App() {
  return (
    <div className="main_container">
      <Header />
      <Transfer />
      <Input_AddTodo_List />
    </div>
  );
}

export default App;
