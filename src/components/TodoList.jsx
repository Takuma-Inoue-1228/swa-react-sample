import { useState } from "react";

export const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <>
      <div className="text-center">
        <h2>Todo List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="shadow  border"
        />
        <button
          onClick={addTodo}
          className="m-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </div>
      <div className="flex justify-center">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
                className="m-2"
              />
              {todo.text}
              <button
                onClick={() => deleteTodo(index)}
                className="m-2 bg-red-400 hover:bg-red-500 text-white font-bold px-4 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
