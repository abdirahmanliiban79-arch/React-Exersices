import { useReducer, useState } from "react";
import styles from "./TodoApp.module.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoAppWithReducer = () => {
  const handleAdd = () => {
    if (todo.trim()) {
      const newTodo = {
        id: crypto.randomUUID(),
        todo,
        completed: false,
      };
      dispatch({ type: "Add", payload: newTodo });
      setTodo("");
    }
  };

  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={styles.TodoSection}>
      <h1 className={styles.headerTitle}>My Todo App</h1>
      <div>
        {" "}
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new Todo"
        />
        <button className={styles.btn} onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className={styles.orderredList}>
        {" "}
        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              {/* <input type="checkbox" /> */}
              <span>{todo.todo}</span>
              <button
              className={styles.deleteBtn}
                onClick={() => dispatch({ type: "delete", payload: todo.id })}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
