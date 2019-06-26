import React, { Fragment, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  // import our data, using a Hook, provided by easy-peasy
  const todos = useStore(state => state.todos);
  const fetchTodos = useActions(actions => actions.fetchTodos);

  //   since we're using functional components and hooks we can't use the lifecycle methods - useEffect runs everytime the state is updated but to prevent the loop
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

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
