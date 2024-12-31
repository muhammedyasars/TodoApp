import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo, edittodo } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [editId, setEditId] = useState("");
  const [editInput, setEditInput] = useState("");
  const todos = useSelector((state) => state.todo.todo);
  console.log(todos);
  return (
    <>
      <div>
        <input
          value={data}
          type="text"
          onChange={(e) => setData(e.target.value)}
        />
        <button
          onClick={() => {
            console.log("clicked");

            dispatch(addtodo(data));
            setData("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {todos?.map((todo) => (
          <li>
            {editId === todo.id ? (
              <>
                <input
                  value={editInput}
                  type="text"
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch(edittodo({ id: todo.id, data: editInput }));
                    setEditId(null);
                  }}
                >
                  submit
                </button>
              </>
            ) : (
              <>
                <span>{todo.data}</span>
                <button onClick={() => dispatch(deletetodo(todo.id))}>
                  delete
                </button>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditInput(todo.data);
                  }}
                >
                  edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;