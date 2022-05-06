import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Shubham's Todo List</h1>
      <form>
        <input type="text" />
        <button type="Submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todos;
