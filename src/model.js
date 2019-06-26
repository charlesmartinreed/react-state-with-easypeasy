import { action } from "easy-peasy";

//model is just an object that has all of our state and objects
export default {
  todos: [
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
  ],
  //  Actions
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  })
};
