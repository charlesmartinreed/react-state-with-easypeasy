import React, { Fragment } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: "Take out the trash",
      completed: true
    },
    {
      id: 2,
      title: "Go grocery shopping",
      completed: false
    },
    {
      id: 3,
      title: "Determine the meaning of life",
      completed: false
    }
  ];

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
