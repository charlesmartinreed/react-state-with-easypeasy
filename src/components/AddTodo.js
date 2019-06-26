import React, { useState } from "react";
import { useActions } from "easy-peasy";

const AddTodo = () => {
  // using hooks for set the title
  const [title, setTitle] = useState("");
  const add = useActions(actions => actions.add);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          add({
            title,
            completed: false
          });
          e.target.value = "";
        }}
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add todo title..."
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
