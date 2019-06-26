import React, { Fragment } from "react";
import { useStore } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  // import our data, using a Hook, provided by easy-peasy

  const todos = useStore(state => state.todos);
  return (
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr style={{ marginTop: "1.9rem" }} />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
