
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addtodo: (state, action) => {
      state.todo.push({ id: Date.now(), data: action.payload });
    },
    deletetodo: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    edittodo: (state, action) => {
      let editItem = state.todo.find((item) => item.id === action.payload.id);
      if (editItem) {
        editItem.data = action.payload.data;
      }
    },
  },
});

export const { addtodo, deletetodo, edittodo } = todoSlice.actions;
export default todoSlice.reducer;
